import axios from "axios";

export const fetchSpaces = () => {
  return async (dispatch, getstate) => {
    try {
      const res = await axios.get("http://localhost:4000/spaces");
      console.log(res.data);
      dispatch({ type: "spaces/fetched", payload: res.data });
    } catch (e) {
      console.log(e.message);
    }
  };
};
