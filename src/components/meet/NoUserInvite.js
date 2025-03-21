// import {View, Text, TouchableOpacity} from 'react-native';
// import React from 'react';
// import {useLiveMeetStore} from '../../service/meetStore';
// import {inviteStyles} from '../../styles/inviteStyles';
// import {addHyphens} from '../../utils/Helpers';
// import {Clipboard, Share} from 'lucide-react-native';

// const NoUserInvite = () => {
//   const {sessionId} = useLiveMeetStore();
//   return (
//     <View style={inviteStyles.container}>
//       <Text style={inviteStyles.headerText}>You are the only one here.</Text>
//       <Text style={inviteStyles.subText}>
//         Share this meeting link with your teammates that you want in the room.
//       </Text>
//       <View style={inviteStyles.linkContainer}>
//         <Text style={inviteStyles.linkText}>
//           vmeet.viva.com/{addHyphens(sessionId)}
//         </Text>
//         <TouchableOpacity style={inviteStyles.iconButton}>
//           <Clipboard color="#fff" size={20} />
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity style={inviteStyles.shareButton}>
//         <Share color="black" size={20} />
//         <Text style={inviteStyles.shareText}>Share this link</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default NoUserInvite;


import {View, Text, TouchableOpacity, Alert, Platform} from 'react-native';
import React from 'react';
import {useLiveMeetStore} from '../../service/meetStore';
import {inviteStyles} from '../../styles/inviteStyles';
import {addHyphens} from '../../utils/Helpers';
import {
  Clipboard as ClipboardIcon,
  Share as ShareIcon,
} from 'lucide-react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {Share as RNShare} from 'react-native';

const NoUserInvite = () => {
  const {sessionId} = useLiveMeetStore();

  // Format meeting link
  const meetingLink = `vmeet.viva.com/${addHyphens(sessionId)}`;
  const fullMeetingUrl = `https://${meetingLink}`;

  // Handle copy to clipboard
  const handleCopy = () => {
    Clipboard.setString(meetingLink);
    Alert.alert('Copied', 'Meeting link copied to clipboard');
  };

  // Handle share
  const handleShare = async () => {
    try {
      // Create a share options object that works on both platforms
      const shareOptions = {
        message:
          Platform.OS === 'android'
            ? `Join my VMeet meeting: ${fullMeetingUrl}`
            : `Join my VMeet meeting: ${meetingLink}`,
      };

      // Only add the url parameter on iOS
      if (Platform.OS === 'ios') {
        shareOptions.url = fullMeetingUrl;
      }

      const result = await RNShare.share(shareOptions);

      if (result.action === RNShare.sharedAction) {
        console.log('Shared successfully');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={inviteStyles.container}>
      <Text style={inviteStyles.headerText}>You are the only one here.</Text>
      <Text style={inviteStyles.subText}>
        Share this meeting link with your teammates that you want in the room.
      </Text>
      <View style={inviteStyles.linkContainer}>
        <Text style={inviteStyles.linkText}>{meetingLink}</Text>
        <TouchableOpacity style={inviteStyles.iconButton} onPress={handleCopy}>
          <ClipboardIcon color="#fff" size={20} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={inviteStyles.shareButton} onPress={handleShare}>
        <ShareIcon color="black" size={20} />
        <Text style={inviteStyles.shareText}>Share this link</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoUserInvite;
