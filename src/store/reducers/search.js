const initialState = {
  query: '',
  loading: false,
  results: []
};

export default function (state = initialState, action) {
  const { type, query } = action;
  switch (type) {
    case 'SEARCH':
      return { ...state, query };

    default:
      return state
  }
}
