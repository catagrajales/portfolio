const BASE_URL = 'http://localhost:3000/';

export const apiUrls = {
  projects: {
    'all': `${BASE_URL}api/projects`,
    'projects': (id) => `${BASE_URL}api/projects/${id}`
  },
  skills: {
    'all': `${BASE_URL}api/skills`
  },
  references: {
    'all': `${BASE_URL}api/references`
  },
  certificates: {
    'all': `${BASE_URL}api/certificates`
  },
}