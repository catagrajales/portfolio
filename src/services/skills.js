import { apiUrls } from "./urls";
export const getSkills = async (id = null) => {
  try {
		const response = await fetch(apiUrls.skills.all);
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