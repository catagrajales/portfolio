import { projectsUrls } from "./urls";
export const getProjects = async (id = null) => {
  try {
		console.log('test')
		const apiUrl = id ? projectsUrls.projects.projects(id) : projectsUrls.projects.all
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error('Error fetching data');
		}
		const data = await response.json();
		return data
  } catch (error) {
    console.log(error)
  }
}