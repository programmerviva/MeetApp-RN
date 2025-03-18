import { StyleSheet } from 'react-native';
import {Colors, screenHeight, screenWidth} from '../utils/Constants';
import {RFValue} from 'react-native-responsive-fontsize';


export const joinStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      backgroundColor: '#fff',
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 5,
      justifyContent: 'space-between',
    },
    headerText: {
      fontSize: RFValue(15),
      opacity: 0.8,
      fontFamily: 'Roboto-Medium',
    },
    gradientButton: {
      borderRadius: 15,
      width: '100%',
      height: 80,
      alignItems: 'center',
      marginVertical: 30,
      justifyContent: 'center',
    },
    button: {
      width: '100%',
      alignItems: 'center',
      gap: 15,
      justifyContent: 'center',
      height: '100%',
      flexDirection: 'row',
    },
    buttonText: {
      color: '#fff',
      fontSize: RFValue(15),
      fontFamily: 'Roboto-Medium',
    },
    orText: {
      fontSize: RFValue(12),
      color: '#888',
      textAlign: 'center',
      marginVertical: 5,
    },
    inputContainer: {
      marginTop: 20,
    },
    labelText: {
      fontSize: RFValue(12),
      color: '#333',
      marginBottom: 5,
      fontFamily: 'OpenSans-Regular',
    },
    inputBox: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      marginTop: 10,
      padding: 12,
      fontSize: RFValue(12),
      fontFamily: 'OpenSans-Regular',
      color: '#333',
      backgroundColor: '#f9f9f9',
    },
    noteText: {
      fontSize: RFValue(10),
      color: '#666',
      marginTop: 10,
      lineHeight: 15,
      fontFamily: 'OpenSans-Regular',
    },
    linkText: {
      color: '#007AFF',
      textDecorationLine: 'underline',
    },
  });