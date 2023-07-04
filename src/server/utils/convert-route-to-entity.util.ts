const mapping: Record<string, string> = {
  employees: 'employee',
  'job-applicants': 'job_applicant',
  organizations: 'organization',
  'performance-evaluations': 'performance_evaluation',
  'time-trackings': 'time_tracking',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
