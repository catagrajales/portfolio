const BASE_URL = process.env.BASE_URL;

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
  learning: {
    'all': `${BASE_URL}api/learning`
  },
  mailer: {
    'send': `api/mailer`
  }
}