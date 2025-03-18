import { StyleSheet } from 'react-native';
import {Colors, screenHeight, screenWidth} from '../utils/Constants';
import {RFValue} from 'react-native-responsive-fontsize';

export const homeStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 10,
    },
    title: {
      fontFamily: 'OpenSans-Medium',
      color: Colors.text,
      fontSize: RFValue(15),
      textAlign: 'center',
    },
    subTitle: {
      fontFamily: 'OpenSans-Medium',
      color: Colors.text,
      fontSize: RFValue(12),
      opacity: 0.6,
      marginTop: 5,
      textAlign: 'center',
      width: '93%',
      alignSelf: 'center',
    },
    img: {
      width: screenWidth * 0.5,
      height: screenHeight * 0.3,
      resizeMode: 'contain',
      alignSelf: 'center',
      margin: 15,
      marginTop: screenHeight * 0.1,
    },
    buttonText: {
      color: '#fff',
      fontSize: RFValue(12),
      fontFamily: 'Roboto-Medium',
    },
    absoluteButton: {
      padding: 15,
      borderRadius: 15,
      backgroundColor: '#0957D0',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.5,
      shadowRadius: 4,
      shadowColor: '#000',
      position: 'absolute',
      right: 20,
      bottom: Platform.OS === 'ios' ? 50 : 30,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
    sessionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      elevation: 2,
      padding: 15,
      marginVertical: 8,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 16,
      shadowOffset: {width: 1, height: 1},
      marginHorizontal: 5,
    },
    sessionTextContainer: {
      flex: 1,
      marginHorizontal: 10,
    },
    sessionTitle: {
      fontFamily: 'Roboto-Medium',
      fontSize: RFValue(14),
      color: Colors.text,
    },
    sessionTime: {
      fontFamily: 'Roboto-Regular',
      fontSize: RFValue(12),
      color: Colors.text,
      opacity: 0.7,
    },
    joinButton: {
      backgroundColor: '#0957D0',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    joinButtonText: {
      color: '#fff',
      fontFamily: 'Roboto-Medium',
      fontSize: RFValue(12),
    },
  });
  