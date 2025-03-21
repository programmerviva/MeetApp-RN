import {
  View,
  Text,
  StyleSheet,
  Animated,
  PanResponder,
  Image,
} from 'react-native';
import React, {useRef} from 'react';
import {useLiveMeetStore} from '../../service/meetStore';
import {useUserStore} from '../../service/userStore';
import {RFValue} from 'react-native-responsive-fontsize';
import {RTCView} from 'react-native-webrtc';
import {EllipsisVertical} from 'lucide-react-native';

const UserView = ({containerDimensions, localStream}) => {
  const {width: containerWidth, height: contanierHeight} =
    containerDimensions();

  const {videoOn} = useLiveMeetStore();
  const {user} = useUserStore();

  const pan = useRef(
    new Animated.ValueXY({
      x: containerWidth - containerWidth * 0.24 - 10,
      y: contanierHeight - contanierHeight * 0.26 - 20,
    }),
  ).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
        pan.setValue({x: 0, y: 0});
      },
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (evt, gestureState) => {
        pan.flattenOffset();

        const {dx, dy} = gestureState;
        const draggedToX = pan.x._value + dx;
        const draggedToY = pan.y._value + dy;

        const restrictedX = Math.min(
          Math.max(draggedToX, 0),
          containerWidth - containerWidth * 0.24,
        );
        const restrictedY = Math.min(
          Math.max(draggedToY, 0),
          contanierHeight - contanierHeight * 0.18,
        );

        const distances = {
          topLeft: Math.sqrt(restrictedX ** 2 + restrictedY ** 2),
          topRight: Math.sqrt(
            (containerWidth - restrictedX) ** 2 + restrictedY ** 2,
          ),

          bottomLeft: Math.sqrt(
            restrictedX ** 2 + (contanierHeight - restrictedY) ** 2,
          ),
          bottomRight: Math.sqrt(
            (containerWidth - restrictedX) ** 2 +
              (contanierHeight - restrictedY) ** 2,
          ),
        };

        const closestCorner = Object.keys(distances).reduce((a, b) =>
          distances[a] < distances[b] ? a : b,
        );
        let finalX = 0;
        let finalY = 0;

        switch (closestCorner) {
          case 'topLeft':
            finalX = 10;
            finalY = 10;
            break;
          case 'topRight':
            finalX = containerWidth - containerWidth * 0.24 - 10;
            finalY = 10;
            break;
          case 'bottomLeft':
            finalX = 10;
            finalY = contanierHeight - contanierHeight * 0.26 - 20;
            break;
          case 'bottomRight':
            finalX = containerWidth - containerWidth * 0.24 - 10;
            finalY = contanierHeight - contanierHeight * 0.26 - 20;
            break;
        }

        Animated.spring(pan, {
          toValue: {x: finalX, y: finalY},
          useNativeDriver: false,
        }).start();
      },
    }),
  ).current;

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        styles.container,
        {
          transform: [{translateX: pan.x}, {translateY: pan.y}],
        },
      ]}>
      {user && (
        <>
          {localStream && videoOn ? (
            <RTCView
              streamURL={localStream?.toURL()}
              style={styles.localVideo}
              mirror
              zOrder={2}
              objectFit="cover"
            />
          ) : (
            <>
              {user?.photo ? (
                <Image source={{uri: user?.photo}} style={styles.image} />
              ) : (
                <View style={styles.noVideo}>
                  <Text style={styles.initial}>{user?.name?.charAt(0)}</Text>
                </View>
              )}
            </>
          )}
        </>
      )}

      <Text style={styles.name}>You</Text>
      <View style={styles.ellipsis}>
        <EllipsisVertical color="#fff" size={RFValue(14)} />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '22%',
    width: '24%',
    zIndex: 99,
    elevation: 10,
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: '#202020',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.6,
    shadowRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
  },
  ellipsis: {
    position: 'absolute',
    bottom: 5,
    right: 2,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  noVideo: {
    backgroundColor: '#FF5100',
    justifyContent: 'center',
    alignContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  localVideo: {
    width: '100%',
    borderRadius: 10,
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  initial: {
    fontSize: RFValue(14),
    color: '#fff',
  },
  name: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    zIndex: 99,
    fontWeight: '600',
    color: '#fff',
    fontSize: RFValue(10),
  },
});

export default UserView;
