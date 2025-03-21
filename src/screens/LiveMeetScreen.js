import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const LiveMeetScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LiveMeetScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});

export default LiveMeetScreen;
