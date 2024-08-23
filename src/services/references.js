import { chunkArray } from "@/lib/utils";
import { apiUrls } from "./urls";

export const getReferences = async () => {
  try {
		const response = await fetch(apiUrls.references.all);
		if (!response.ok) {
			throw new Error('Error fetching data');
		}
		const data = await response.json();

		if(!data.success) {
			throw new Error('Error fetching data');
		}
		return chunkArray(data.data, 2);
  } catch (error) {
    console.log(error)
  }
}