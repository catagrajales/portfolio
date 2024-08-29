import { chunkArray } from "@/lib/utils";
import { apiUrls } from "./urls";
export const getProjects = async (id = null) => {
  try {
		const apiUrl = id ? apiUrls.projects.projects(id) : apiUrls.projects.all
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error('Error fetching data');
		}
		const data = await response.json();

		if(!data.success) {
			throw new Error('Error fetching data');
		}
		return id ? data.data : chunkArray(data.data, 3);
  } catch (error) {
    console.log(error)
  }
}