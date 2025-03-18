import { StyleSheet } from 'react-native';
import {Colors, screenHeight, screenWidth} from '../utils/Constants';
import {RFValue} from 'react-native-responsive-fontsize';

export const inquiryStyles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    keyboardAvoidingView: {
      flex: 1,
    },
    scrollViewContent: {
      flexGrow: 1,
      justifyContent: 'flex-end',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 15,
      fontFamily: 'OpenSans-Medium',
    },
    input: {
      height: 50,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 15,
      paddingHorizontal: 10,
      fontFamily: 'OpenSans-Regular',
      fontSize: RFValue(12),
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      flex: 1,
      backgroundColor: '#007BFF',
      paddingVertical: 10,
      borderRadius: 20,
      marginHorizontal: 5,
      alignItems: 'center',
    },
    cancelButton: {
      backgroundColor: '#FF5A5F',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'OpenSans-Medium',
    },
  });
  