import { Platform, StyleSheet } from 'react-native';
import {Colors, screenHeight, screenWidth} from '../utils/Constants';
import {RFValue} from 'react-native-responsive-fontsize';


export const prepareStyles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    borderRadius: 40,
    alignSelf: 'center',
  },
  joinButton: {
    padding: 15,
    paddingHorizontal: 20,
    backgroundColor: '#0957D0',
    borderRadius: 10,
    margin: 10,
  },
  joinButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: RFValue(13),
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  meetingCode: {
    fontFamily: 'Roboto-Regular',
    fontSize: RFValue(18),
    textAlign: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  camera: {
    width: 130,
    marginVertical: 20,
    height: 240,
    overflow: 'hidden',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
    borderRadius: 18,
  },
  localVideo: {
    width: '100%',
    height: '100%',
  },
  videoContainer: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  iconButton: {
    marginHorizontal: 10,
    backgroundColor: '#2E3030',
    padding: 5,
    borderRadius: 100,
  },
  buttonContainer: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    gap: 5,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'OpenSans-Medium',
    fontSize: RFValue(11),
    textAlign: 'center',
  },
  peopleText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: RFValue(12),
    textAlign: 'center',
  },
  flexRowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginVertical: 20,
  },
  infoContainer: {
    padding: 12,
    paddingVertical: 25,
  },
  joinContainer: {
    alignItems: 'center',
    backgroundColor: '#E8EDF5',
    paddingTop: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingBottom: Platform.OS === 'ios' ? 40 : 20,
  },
  joiningText: {
    fontFamily: 'Roboto-Medium',
    fontSize: RFValue(12),
    width: '80%',
    textAlign: 'left',
  },
});