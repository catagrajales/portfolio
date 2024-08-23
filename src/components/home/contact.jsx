"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { sendMail } from "@/services/sendMail"

export const Contact = () => {

	const [formData, setFormData] = useState({ name: '', email: '', message: '' });

	const handleSubmit = async (e) => {
		e.preventDefault();

		const result = await sendMail(formData);
		if (result) {
			alert('Email sent successfully!');
			setFormData({ name: '', email: '', message: '' });
		}
	}

	return (
		<section className="mt-12">
			<h2 className="text-2xl font-bold mb-4">Contact</h2>
			<form 
				className="grid gap-4"
				onSubmit={handleSubmit}
			>
				<Input 
					type="text" 
					placeholder="Name" 
					className="w-full"
					value={formData.name} 
					onChange={(e) => setFormData({ ...formData, name: e.target.value })}
				/>
				<Input 
					type="email" 
					placeholder="E-mail" 
					className="w-full" 
					value={formData.email}
					onChange={(e) => setFormData({ ...formData, email: e.target.value })}
				/>
				<Textarea 
					placeholder="Message" 
					className="w-full" 
					value={formData.message}
					onChange={(e) => setFormData({ ...formData, message: e.target.value })}	
				/>
				<Button type="submit" className="w-full bg-[#008F8C] text-[#D8FFDB] hover:bg-[#015958]">
					Submit
				</Button>
			</form>
		</section>
	)
}