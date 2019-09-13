import axios from "axios";

export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";


export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCHING_SMURFS_START });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data });
      })
      // .catch(err => {
      //   dispatch({ type: FETCHING_PHOTO_FAILURE, payload: res.data.url });
      // });
  };
//   export const mapSmurfs = () => dispatch => {
//       dispatch ({ type: MAPPING_SMURFS, payload: smurfs });

//   }