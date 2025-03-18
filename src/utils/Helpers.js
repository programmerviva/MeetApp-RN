import {Platform} from 'react-native';
import {
  requestMultiple,
  PERMISSIONS,
  RESULTS,
  request,
} from 'react-native-permissions';

export const requestPermissions = async () => {
  try {
    const permissionsToRequest =
      Platform.OS === 'ios'
        ? [
            PERMISSIONS.IOS.CAMERA,
            PERMISSIONS.IOS.MICROPHONE,
            PERMISSIONS.IOS.PHOTO_LIBRARY,
          ]
        : [
            PERMISSIONS.ANDROID.CAMERA,
            PERMISSIONS.ANDROID.RECORD_AUDIO,
            PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
          ];

    const results = await requestMultiple(permissionsToRequest);

    for (const [permission, status] of Object.entries(results)) {
      logPermissionStatus(permission, status);
    }

    const isCameraGranted =
      Platform.OS === 'ios'
        ? results[PERMISSIONS.IOS.CAMERA] === 'granted'
        : results[PERMISSIONS.ANDROID.CAMERA] === 'granted';

    const isMicrophoneGranted =
      Platform.OS === 'ios'
        ? results[PERMISSIONS.IOS.MICROPHONE] === 'granted'
        : results[PERMISSIONS.ANDROID.RECORD_AUDIO] === 'granted';

    return {isCameraGranted, isMicrophoneGranted};
  } catch (error) {
    console.error('Error requesting permissions:', error);
    return {isCameraGranted: false, isMicrophoneGranted: false};
  }
};

const logPermissionStatus = (permission, status) => {
  // if (status === RESULTS.GRANTED) {
  //   console.log(`${permission} PERMISSION GRANTED ✅`);
  // } else if (status === RESULTS.DENIED) {
  //   console.log(`${permission} PERMISSION DENIED ❌`);
  // } else if (status === RESULTS.BLOCKED) {
  //   console.log(`${permission} PERMISSION BLOCKED 🚫`);
  // } else {
  //   console.log(`${permission} PERMISSION STATUS: ${status}`);
  // }
};

export const addHyphens = str => {
  return str?.replace(/(.{3})(?=.)/g, '$1-');
};

export const removeHyphens = str => {
  return str?.replace(/-/g, '');
};

export const requestCameraPermission = async () => {
  try {
    const permissionToRequest =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA;

    const status = await request(permissionToRequest);

    logPermissionStatus(permissionToRequest, status);

    return status === 'granted';
  } catch (error) {
    console.error('Error requesting camera permission:', error);
    return false;
  }
};

export const requestMicrophonePermission = async () => {
  try {
    const permissionToRequest =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.MICROPHONE
        : PERMISSIONS.ANDROID.RECORD_AUDIO;

    const status = await request(permissionToRequest);

    logPermissionStatus(permissionToRequest, status);

    return status === 'granted';
  } catch (error) {
    console.error('Error requesting microphone permission:', error);
    return false;
  }
};

export const peerConstraints = {
  iceServers: [{urls: 'stun:stun.l.google.com:19302'}],
};
export const sessionConstraints = {
  mandatory: {
    OfferToReceiveAudio: true,
    OfferToReceiveVideo: true,
    VoiceActivityDetection: true,
  },
};
