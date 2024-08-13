import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export const Contact = () => {
	return (
		<section className="mt-12">
			<h2 className="text-2xl font-bold mb-4">Contact</h2>
			<form className="grid gap-4">
				<Input type="text" placeholder="Name" className="w-full" />
				<Input type="email" placeholder="E-mail" className="w-full" />
				<Textarea placeholder="Message" className="w-full" />
				<Button type="submit" className="w-full bg-[#008F8C] text-[#D8FFDB] hover:bg-[#015958]">
					Submit
				</Button>
			</form>
		</section>
	)
}