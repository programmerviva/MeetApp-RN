import {createContext, useContext, useEffect, useRef} from 'react';
import {SOCKET_URL} from '../config';
import {io} from 'socket.io-client';

const WSContext = createContext(undefined);
export const WSProvider = ({children}) => {
  const socket = useRef();

  useEffect(() => {
    socket.current = io(SOCKET_URL, {
      transports: ['websocket'],
    });

    return () => {
      socket.current?.disconnect();
    };
  }, []);

  const emit = (event, data) => {
    socket.current?.emit(event, data);
  };

  const on = (event, cb) => {
    socket.current?.on(event, cb);
  };

  const off = (event, cb) => {
    socket.current?.off(event, cb);
  };

  const removeListener = listenerName => {
    socket.current?.removeListener(listenerName);
  };

  const disconnect = () => {
    if (socket.current) {
      socket.current?.disconnect();
      socket.current = undefined;
    }
  };

  const socketService = {
    initializeSocket: () => {},
    emit,
    on,
    off,
    removeListener,
    disconnect,
  };
  return (
    <WSContext.Provider value={socketService}>{children}</WSContext.Provider>
  );
};

export const useWS = () => {
  const socketService = useContext(WSContext);
  if (!socketService) {
    throw new Error('useWS must be used within a WSProvider');
  }
  return socketService;
};
