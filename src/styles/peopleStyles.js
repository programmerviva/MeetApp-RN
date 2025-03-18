import { StyleSheet } from 'react-native';
import {Colors, screenHeight, screenWidth} from '../utils/Constants';
import {RFValue} from 'react-native-responsive-fontsize';


export const peopleStyles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: '#121212',
      justifyContent: 'center',
    },
    card: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: '#2E3030',
      overflow: 'hidden',
      marginHorizontal: 5,
      marginVertical: 5,
      borderColor: '#95C9FF',
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 60,
    },
    rtcVideo: {
      width: '100%',
      height: '100%',
      zIndex: 2,
      backgroundColor: 'black',
    },
    noVideo: {
      backgroundColor: '#FF5100',
      justifyContent: 'center',
      alignItems: 'center',
      width: 60,
      height: 60,
      borderRadius: 60,
    },
    initial: {
      fontSize: RFValue(14),
      color: '#fff',
    },
    name: {
      position: 'absolute',
      bottom: 5,
      left: 5,
      zIndex: 4,
      fontWeight: '600',
      color: '#fff',
      fontSize: RFValue(10),
    },
    muted: {
      position: 'absolute',
      top: 5,
      right: 5,
      backgroundColor: '#000',
      borderRadius: 100,
      padding: 5,
    },
    ellipsis: {
      position: 'absolute',
      bottom: 5,
      right: 2,
      zIndex: 2,
    },
    others: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
      borderRadius: 100,
      paddingHorizontal: 10,
      paddingVertical: 5,
      position: 'absolute',
      bottom: 5,
      right: 5,
    },
    othersText: {
      fontSize: RFValue(10),
      color: '#fff',
      fontWeight: '500',
    },
  });
  