import {create} from 'zustand';
import {createJSONStorage} from 'zustand/middleware';
import {mmkvStorage} from './storage';

export const useLiveMeetStore = create()(
  (set, get) => ({
    sessionId: null,
    participants: [],
    chatMessages: [],
    micOn: false,
    videoOn: false,
    clear: () =>
      set({
        sessionId: null,
        participants: [],
      }),

    // chatmessages aap add kr skte ho.

    addSessionId: id => {
      set({sessionId: id});
    },

    removeSessionId: () => {
      set({sessionId: null});
    },

    addParticipant: participant => {
      const {participants} = get();
      if (!participants.find(p => p.userId === participant?.userId)) {
        set({participants: [...participants, participant]});
      }
    },

    removeParticipant: participantId => {
      const {participants} = get();
      set({
        participants: participants.filter(p => p.userId !== participantId),
      });
    },

    updateParticipant: updateParticipant => {
      const {participants} = get();
      set({
        participants: participants.map(p =>
          p.userId === updateParticipant.userId
            ? {
                ...p,
                micOn: updateParticipant.micOn,
                videoOn: updateParticipant.videoOn,
              }
            : p,
        ),
      });
    },

    setStreamURL: (participantId, streamURL) => {
      const {participants} = get();
      const updateParticipants = participants.map(p => {
        if (p.userId === participantId) {
          return {
            ...p,
            streamURL,
          };
        }
        return p;
      });
      // if (!participants.some(p => p.userId === participantId)) {
      //   updateParticipants.push({id: participantId, streamURL});
      // }

      set({participants: updateParticipants});
    },

    toggle: type => {
      if (type === 'mic') {
        set(state => ({micOn: !state.micOn}));
      } else if (type === 'video') {
        set(state => ({videoOn: !state.videoOn}));
      }
    },
  }),
  {
    storage: createJSONStorage(() => mmkvStorage),
    name: 'live-meet-storage',
  },
);
