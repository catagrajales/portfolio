const BASE_URL = 'http://localhost:3000/';

export const projectsUrls = {
  projects: {
    'all': `${BASE_URL}api/projects`,
    'projects': (id) => `${BASE_URL}api/projects/${id}`
  }
}