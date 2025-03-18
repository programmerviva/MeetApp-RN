import { Platform, StyleSheet } from "react-native";

export const footerStyles = StyleSheet.create({
    footerContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 25,
      width: '100%',
      paddingHorizontal: 20,
      paddingBottom: Platform.OS === 'ios' ? 30 : 15,
    },
    iconButton: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: 50,
      padding: 12,
    },
    callEndButton: {
      backgroundColor: '#FF0000',
      borderRadius: 50,
      padding: 14,
    },
  });