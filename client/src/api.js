import axios from 'axios';

const base = '/api';

export const GetJobs = () => axios.get(`${base}/jobs`);

export const SubmitApplication = (jobId, data) => axios.post(`${base}/applications`, {...data, jobId});

export const GetApplication = id => axios.get(`${base}/applications/${id}?filter[include]=job`);