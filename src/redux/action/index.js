export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const GET_JOBS = "GET_JOBS";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";
export const GET_JOBS_LOADING = "GET_JOBS_LOADING";

export const addToCartAction = (jobToAdd) => ({
  type: ADD_TO_CART,
  payload: jobToAdd,
});

export const removeFromCartAction = (indexToRemove) => ({
  type: REMOVE_FROM_CART,
  payload: indexToRemove,
});

export const addToCartActionWithThunk = (jobToAdd) => {
  return async (dispatch) => {
    console.log("hello! from thunk");
    if (3 > 5) {
      dispatch({
        type: "ERROR",
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        payload: jobToAdd,
      });
    }
  };
};

export const getJobsAction = () => {
  console.log("in getJobsAction");
  return (dispatch, getState) => {
    const stateRightNow = getState();
    setTimeout(async () => {
      try {
        let response = await fetch(
          "https://strive-jobs-api.herokuapp.com/jobs"
        );
        if (response.ok) {
          let data = await response.json();
          console.log("Jobs IN ACTION CREATOR", data);
          dispatch({
            type: GET_JOBS,
            payload: data,
          });
          dispatch({
            type: GET_JOBS_LOADING,
          });
        } else {
          console.log("error happened fetching the JOBS");
          dispatch({
            type: GET_JOBS_ERROR,
          });
          dispatch({
            type: GET_JOBS_LOADING,
          });
        }
      } catch (error) {
        console.log(error);
        dispatch({
          type: GET_JOBS_ERROR,
        });
        dispatch({
          type: GET_JOBS_LOADING,
        });
      }
    }, 1000);
  };
};
