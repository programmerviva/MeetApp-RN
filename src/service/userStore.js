import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import {mmkvStorage} from './storage';

export const useUserStore = create()(
  persist(
    (set, get) => ({
      user: null,
      session: [],
      setUser: data => set({user: data}),
      addSession: sessionId => {
        const {sessions} = get();
        const existingSessionIndex = sessions.findIndex(s => s === sessionId);
        if (existingSessionIndex === -1) {
          set({sessions: [sessionId, ...sessions]});
        }
      },
      removeSession: sessionId => {
        const {sessions} = get();
        const updatedSessions = sessions.filter(s => s !== sessionId);
        set({sessions: updatedSessions});
      },
      clear: () => set({user: null, sessions: []}),
    }),
    {
      storage: createJSONStorage(() => mmkvStorage),
      name: 'user-storage',
    },
  ),
);
