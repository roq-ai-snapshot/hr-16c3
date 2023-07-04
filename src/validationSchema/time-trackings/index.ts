import * as yup from 'yup';

export const timeTrackingValidationSchema = yup.object().shape({
  work_hours: yup.number().integer(),
  employee_id: yup.string().nullable(),
});
