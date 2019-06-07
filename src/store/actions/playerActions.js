export const updatePlaylist = (playlist) => {
  return {
    type: 'UPDATE_PLAYLIST',
    playlist
  }
}

export const togglePlaying = () => {
  return {
    type: 'TOGGLE_PLAYING'
  }
}

export const updatePlaying = (current) => {
  return {
    type: 'UPDATE_PLAYING',
    current
  }
}


export const playNext = () => {
  return {
    type: 'PLAY_NEXT'
  }
}

export const playPrev = () => {
  return {
    type: 'PLAY_PREV'
  }
}

export const updateQueue = () => {
  return {
    type: 'UPDATE_QUEUE'
  }
}

export const resetQueue = () => {
  return {
    type: 'RESET_QUEUE'
  }
}

export const setRecent = (current) => {
  return {
    type: 'SET_RECENT',
    currently: current
  }
}
