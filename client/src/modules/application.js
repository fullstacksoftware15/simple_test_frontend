export const FETCH_APPLICATION_START = 'jobs/FETCH_APPLICATION_START';
export const FETCH_APPLICATION_END = 'jobs/FETCH_APPLICATION_END';

const initialState = {
  fetching: false,
  fetched: false,
  application: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APPLICATION_START:
      return { ...state, fetching: true };

    case FETCH_APPLICATION_END:
      return {
        ...state,
        fetching: false,
        fetched: true,
        application: action.payload
      };

    default:
      return { ...state, fetching: false };
  }
};

export const fetchApplicationStart = () => ({
  type: FETCH_APPLICATION_START
});

export const fetchApplicationEnd = data => ({
  type: FETCH_APPLICATION_END,
  payload: data
});

export const GetApplication = (id) => (dispatch, getState, api) => {
  dispatch(fetchApplicationStart());

  return api
    .GetApplication(id)
    .then(application => dispatch(fetchApplicationEnd(application)));
};