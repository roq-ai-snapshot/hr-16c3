import * as yup from 'yup';

export const jobApplicantValidationSchema = yup.object().shape({
  application_status: yup.string(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
