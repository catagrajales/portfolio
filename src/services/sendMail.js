import { apiUrls } from "./urls";

export const sendMail = async (formData) => {
  try {
		const response = await fetch(apiUrls.mailer.send, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		});
		if (!response.ok) {
			throw new Error('Error fetching data');
		}
		const data = await response.json();

		if(!data.success) {
			throw new Error('Error fetching data');
		}
		
		return true
  } catch (error) {
    console.log(error)
  }
}