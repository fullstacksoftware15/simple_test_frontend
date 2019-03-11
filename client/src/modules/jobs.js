export const FETCH_JOBS_START = 'jobs/FETCH_JOBS_START';
export const FETCH_JOBS_END = 'jobs/FETCH_JOBS_END';

const initialState = {
  fetching: false,
  fetched: false,
  jobs: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_START:
      return { ...state, fetching: true };

    case FETCH_JOBS_END:
      return {
        ...state,
        fetching: false,
        fetched: true,
        jobs: action.payload
      };

    default:
      return { ...state, fetching: false };
  }
};

export const fetchJobsStart = () => ({
  type: FETCH_JOBS_START
});

export const fetchJobsEnd = data => ({
  type: FETCH_JOBS_END,
  payload: data
});

export const GetJobs = () => (dispatch, getState, api) => {
  dispatch(fetchJobsStart());

  return api
    .GetJobs()
    .then(jobs => dispatch(fetchJobsEnd(jobs)));
};