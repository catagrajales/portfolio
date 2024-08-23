"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { sendMail } from "@/services/sendMail"
import { Loader } from "@/components/ui/loader"


import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const MySwal = withReactContent(Swal)
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').min(5, 'Name must be at least 5 characters'),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  message: Yup.string().required('Message is required').min(30, 'Message must be at least 30 characters'),
})

export const Contact = () => {

	const [isLoading, setIsLoading] = useState(false)
	const {
    register,
    handleSubmit,
		reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

	const onSubmit = async (data) => {
		setIsLoading(true)
		const result = await sendMail(data);
		if (result) {
			reset();
			setIsLoading(false)
		 	openNotification('Email sent successfully!')
		}
  };

	const openNotification = (message) => {
		MySwal.fire({
			title: "Thanks!",
			text: message,
			icon: "success",
			confirmButtonColor: '#008F8C'
		})
	}

	return (
		<section className="mt-12">
			<h2 className="text-2xl font-bold mb-4">Contact</h2>
			<form 
				className="grid gap-4"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div>
					<Input 
						type="text" 
						placeholder="Name" 
						className="w-full"
						{...register('name')}
						disabled={isLoading}
					/>
					{errors.name?.message && <p className="error-message">{errors.name?.message}</p>}
				</div>
				<div>
					<Input 
						type="email" 
						placeholder="E-mail" 
						className="w-full" 
						{...register('email')}
						disabled={isLoading}
					/>
					{errors.email?.message && <p className="error-message">{errors.email?.message}</p>}
				</div>
				<div>
					<Textarea 
						placeholder="Message" 
						className="w-full" 
						{...register('message')}
						disabled={isLoading}
					/>
					{errors.message?.message && <p className="error-message">{errors.message?.message}</p>}
				</div>
				<Button type="submit" className="w-full bg-[#008F8C] text-[#D8FFDB] hover:bg-[#015958]" disabled={isLoading}>
					{isLoading && <Loader />}
					Submit
				</Button>
			</form>
		</section>
	)
}