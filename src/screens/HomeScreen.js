/* eslint-disable react-native/no-inline-styles */

import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {homeStyles} from '../styles/homeStyles';
import HomeHeader from '../components/home/HomeHeader';
import {navigate} from '../utils/NavigationUtils';
import {Calendar, Video} from 'lucide-react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useUserStore} from '../service/userStore';
import {useWS} from '../service/api/WSProvider';
import {useLiveMeetStore} from '../service/meetStore';
import {Colors} from '../utils/Constants';
import {addHyphens, removeHyphens} from '../utils/Helpers';
import {checkSession} from '../service/api/session';

const HomeScreen = () => {
  const {emit} = useWS();
  const {user, session, addSession, removeSession} = useUserStore();
  const {addSessionId, removeSessionId} = useLiveMeetStore();

  const handleNavigation = () => {
    const storedName = user?.name;
    if (!storedName) {
      Alert.alert('Please enter your details to proceed');
      return;
    }
    navigate('JoinMeetScreen');
  };

  const joinViaSessionId = async (id) => {
    const storedName = user?.name;
    if (!storedName) {
      Alert.alert('Please enter your details to proceed');
      return;
    }
    const isAvailable = await checkSession(id);
    if (isAvailable) {
      emit('prepare-session', {
        userId: user?.id,
        sessionId: removeHyphens(id),
      });
      addSession(id);
      addSessionId(id);
      navigate('PrepareMeetScreen');
    } else {
      removeSession(id);
      removeSessionId(id);
      Alert.alert('This session is no longer available');
    }
  };

  const renderSessions = ({item}) => {
    return (
      <View style={homeStyles.sessionContainer}>
        <Calendar size={RFValue(20)} color={Colors.icon} />
        <View style={homeStyles.sessionTextContainer}>
          <Text style={homeStyles.sessionTitle}>{addHyphens(item)}</Text>
          <Text style={homeStyles.sessionTime}>
            Just join and enjoy meeting
          </Text>
        </View>
        <TouchableOpacity
          style={homeStyles.joinButton}
          onPress={() => joinViaSessionId(item)}>
          <Text style={homeStyles.joinButtonText}>Join</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={homeStyles.container}>
      <HomeHeader />

      <FlatList
        data={session}
        renderItem={renderSessions}
        key={item => item}
        contentContainerStyle={{paddingVertical: 15}}
        ListEmptyComponent={
          <>
            <Image
              source={require('../assets/images/bg.png')}
              style={homeStyles.img}
            />
            <Text style={homeStyles.title}>
              Video calls and meeting for everyone
            </Text>
            <Text style={homeStyles.subTitle}>
              Connect, collaborate and celebrate from anywhere with VMeet
            </Text>
          </>
        }
      />

      <TouchableOpacity
        style={homeStyles.absoluteButton}
        onPress={handleNavigation}>
        <Video size={RFValue(14)} color={'#fff'} />
        <Text style={homeStyles.buttonText}>Join</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
