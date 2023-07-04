import axios from 'axios';
import queryString from 'query-string';
import { JobApplicantInterface, JobApplicantGetQueryInterface } from 'interfaces/job-applicant';
import { GetQueryInterface } from '../../interfaces';

export const getJobApplicants = async (query?: JobApplicantGetQueryInterface) => {
  const response = await axios.get(`/api/job-applicants${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createJobApplicant = async (jobApplicant: JobApplicantInterface) => {
  const response = await axios.post('/api/job-applicants', jobApplicant);
  return response.data;
};

export const updateJobApplicantById = async (id: string, jobApplicant: JobApplicantInterface) => {
  const response = await axios.put(`/api/job-applicants/${id}`, jobApplicant);
  return response.data;
};

export const getJobApplicantById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/job-applicants/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteJobApplicantById = async (id: string) => {
  const response = await axios.delete(`/api/job-applicants/${id}`);
  return response.data;
};
