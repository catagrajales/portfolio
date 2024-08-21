import { apiUrls } from "./urls";

export const getLearning = async () => {
  try {
		const response = await fetch(apiUrls.learning.all);
		if (!response.ok) {
			throw new Error('Error fetching data');
		}
		const data = await response.json();

		if(!data.success) {
			throw new Error('Error fetching data');
		}
		return data.data;
  } catch (error) {
    console.log(error)
  }
}