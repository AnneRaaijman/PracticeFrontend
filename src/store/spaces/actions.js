import axios from "axios";

export const fetchSpaces = () => {
  return async (dispatch, getState) => {
    try {
      const res = await axios.get("http://localhost:4000/spaces");
      dispatch({ type: "spaces/fetched", payload: res.data });
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const fetchedDetails = (id) => {
  return async (dispatch, getState) => {
    try {
      console.log("data");
      const res = await axios.get(`http://localhost:4000/spaces/story/${id}`);
      console.log("details data", res);
      dispatch({ type: "space/detailsfetched", payload: res.data });
    } catch (e) {
      console.log(e.message);
    }
  };
};
//pass id with params in my details page where I call this thunk creater.
