const initialState = {
  show: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_LYRICS':
      return  { ...state, show: !state.show }

    case 'CLOSE_LYRICS':
      return  { ...state, show: false }

    default:
      return state;
  }
}