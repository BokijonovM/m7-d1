import { GET_JOBS, GET_JOBS_ERROR, GET_JOBS_LOADING } from "../action";
import { initialState } from "../store";

// let's write our reducer! :)
const jobReducer = (state = initialState.job, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        stock: action.payload,
      };

    case GET_JOBS_ERROR:
      return {
        ...state,
        isError: true,
      };

    case GET_JOBS_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default jobReducer;
