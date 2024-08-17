import { projectsUrls } from "./urls";
export const getProjects = async (id = null) => {
  try {
		const apiUrl = id ? projectsUrls.projects.projects(id) : projectsUrls.projects.all
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error('Error fetching data');
		}
		const data = await response.json();

		if(!data.success) {
			throw new Error('Error fetching data');
		}
		return data.data
  } catch (error) {
    console.log(error)
  }
}