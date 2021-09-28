const initialState = {
  loading: true,
  spaces: [], // only spaces no stories
  details: null, // null || { full space with stories }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "spaces/fetched":
      return { loading: false, spaces: action.payload };

    case "space/detailsfetched":
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
};
// next case for retrieving details.
