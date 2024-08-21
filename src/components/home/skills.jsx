import { CodeIcon } from "@/components/ui/icons"
import { getSkills } from "@/services/skills"

export const Skills = async () => {

	const skills = await getSkills()

	return (
		<section className="mt-12">
			<h2 className="text-2xl font-bold mb-4">Skills</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
				{skills && skills.length ? skills.map((skill, key) => (
					<div key={key} className="bg-[#D8FFDB] rounded-lg p-4 text-center">
						<CodeIcon className="w-8 h-8 mb-2 text-[#008F8C]" />
						<p className="text-[#333333]">{skill}</p>
					</div>
				)) : null}
			</div>
		</section>
	)
}
