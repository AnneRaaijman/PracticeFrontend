import { fetchSpaces } from "./actions";

const initialState = {
  loading: true,
  spaces: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;

    case "spaces/fetched":
      return { loading: false, spaces: action.payload };
  }
};
