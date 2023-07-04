import * as yup from 'yup';

export const performanceEvaluationValidationSchema = yup.object().shape({
  feedback: yup.string(),
  employee_id: yup.string().nullable(),
});
