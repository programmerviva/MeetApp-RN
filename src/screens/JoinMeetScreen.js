import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {goBack, navigate} from '../utils/NavigationUtils';
import {checkSession, createSession} from '../service/api/session';
import {useWS} from '../service/api/WSProvider';
import {removeHyphens} from '../utils/Helpers';
import {useUserStore} from '../service/userStore';
import {useLiveMeetStore} from '../service/meetStore';
import {joinStyles} from '../styles/joinStyles';
import {ChevronLeft, EllipsisVertical, Video} from 'lucide-react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../utils/Constants';
import {LinearGradient} from 'react-native-svg';

const JoinMeetScreen = () => {
  const [code, setCode] = useState('');
  const {emit} = useWS();
  const {addSessionId, removeSessionId} = useLiveMeetStore();
  const {user, addSession, removeSession} = useUserStore();

  const createNewMeet = async () => {
    const sessionId = await createSession();
    if (sessionId) {
      addSessionId(sessionId);
      addSession(sessionId);
      emit('prepare-session', {
        userId: user?.id,
        sessionId,
      });
      navigate('PrepareMeetScreen');
    }
  };

  const joinViaSessionId = async () => {
    const isAvailable = await checkSession(code);
    if (isAvailable) {
      emit('prere-session', {
        userId: user?.id,
        sessionId: removeHyphens(code),
      });
      addSession(code);
      addSessionId(code);
      navigate('PrepareMeetScreen');
    } else {
      removeSession(code);
      removeSessionId(code);
      setCode('');
      Alert.alert('There is no meeting available.');
    }
  };

  return (
    <View style={joinStyles.container}>
      <SafeAreaView />
      <View style={joinStyles.headerContainer}>
        <ChevronLeft
          size={RFValue(18)}
          onPress={() => goBack()}
          color={Colors.text}
        />
        <Text style={joinStyles.headerText}>Join your meet.</Text>
        <EllipsisVertical size={RFValue(18)} color={Colors.text} />
      </View>

      <LinearGradient
        colors={['#007AFF', '#A6C8FF']}
        style={joinStyles.gradientButton}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <TouchableOpacity
          style={joinStyles.button}
          activeOpacity={0.7}
          onPress={createNewMeet}>
          <Video size={RFValue(22)} color="#fff" />
          <Text style={joinStyles.buttonText}>Create New Meet.</Text>
        </TouchableOpacity>
      </LinearGradient>

      <Text style={joinStyles.orText}>OR</Text>

      <View style={joinStyles.inputContainer}>
        <Text style={joinStyles.labelText}>Enter the meet code.</Text>
        <TextInput
          style={joinStyles.inputBox}
          value={code}
          onChangeText={setCode}
          returnKeyLabel="Join"
          returnKeyType="join"
          onSubmitEditing={() => joinViaSessionId()}
          placeholder="Example: abc-mnox-viva"
          placeholderTextColor="#888"
        />
        <Text style={joinStyles.noteText}>
          Note: This meeting is secured with cloud encryption but not end-to-end
          encryption. <Text style={joinStyles.linkText}>Learn more.</Text>
        </Text>
      </View>
    </View>
  );
};

export default JoinMeetScreen;
