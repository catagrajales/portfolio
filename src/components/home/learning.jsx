import { CodeIcon } from "@/components/ui/icons"
import { getLearning } from "@/services/learning"

export const Learning = async () => {
	const learning = await getLearning()
	return (
		<section className="mt-12">
			<h2 className="text-2xl font-bold mb-4">Learning</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
				{learning && learning.length ? learning.map((skill, key) => (
					<div key={key} className="bg-[#D8FFDB] rounded-lg p-2 sm:p-4 text-center">
						<CodeIcon className="w-8 h-8 mb-2 text-[#008F8C]" />
						<p className="text-[#333333]">{skill}</p>
					</div>
				)) : null}
			</div>
		</section>
	)
}