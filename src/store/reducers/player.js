const initialState = {
  np: 0,
  current: {},
  playlist: [],
  playing: false,
  recent: [],
  queue: { next: 1, np: 0, prev: -1 }
};

export default function (state = initialState, action) {
  const { type, current, currently, playlist } = action;
  switch (type) {
    case 'UPDATE_PLAYING':
      return { ...state, current, playing: true };

    case 'UPDATE_PLAYLIST':
      return { ...state, playlist };

    case 'TOGGLE_PLAYING':
      return { ...state, playing: !state.playing };

    case 'PLAY_NEXT':
      return { ...state, playing: true, np: state.np + 1, current: { ...state.playlist.songs[state.queue.next]} };

    case 'PLAY_PREV':
      return { ...state, playing: true, np: state.np - 1, current: { ...state.playlist.songs[state.queue.prev] } };

    case 'UPDATE_QUEUE':
      return { ...state, queue: { ...state.queue, next: state.np + 1, np: state.np, prev: state.np - 1 } }

    case 'RESET_QUEUE':
      return { ...state, queue: { ...state.queue, next: 1, np: state.np, prev: -1 }}

    case 'SET_RECENT':
      if(state.recent.length === 20) {
        return { ...state, recent: [currently, ...state.recent.slice(0, 19)] }
      }
      return { ...state, recent: [currently, ...state.recent] }

    default:
      return state
  }
}
