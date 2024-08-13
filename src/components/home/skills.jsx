import { CodeIcon } from "@/components/ui/icons"

export const Skills = () => {
	return (
		<section className="mt-12">
			<h2 className="text-2xl font-bold mb-4">Skills</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
				<div className="bg-[#D8FFDB] rounded-lg p-4 text-center">
					<CodeIcon className="w-8 h-8 mb-2 text-[#008F8C]" />
					<p className="text-[#333333]">JavaScript</p>
				</div>
				<div className="bg-[#D8FFDB] rounded-lg p-4 text-center">
					<CodeIcon className="w-8 h-8 mb-2 text-[#008F8C]" />
					<p className="text-[#333333]">React</p>
				</div>
				<div className="bg-[#D8FFDB] rounded-lg p-4 text-center">
					<CodeIcon className="w-8 h-8 mb-2 text-[#008F8C]" />
					<p className="text-[#333333]">Node.js</p>
				</div>
				<div className="bg-[#D8FFDB] rounded-lg p-4 text-center">
					<CodeIcon className="w-8 h-8 mb-2 text-[#008F8C]" />
					<p className="text-[#333333]">MongoDB</p>
				</div>
				<div className="bg-[#D8FFDB] rounded-lg p-4 text-center">
					<CodeIcon className="w-8 h-8 mb-2 text-[#008F8C]" />
					<p className="text-[#333333]">SQL</p>
				</div>
				<div className="bg-[#D8FFDB] rounded-lg p-4 text-center">
					<CodeIcon className="w-8 h-8 mb-2 text-[#008F8C]" />
					<p className="text-[#333333]">Git</p>
				</div>
				<div className="bg-[#D8FFDB] rounded-lg p-4 text-center">
					<CodeIcon className="w-8 h-8 mb-2 text-[#008F8C]" />
					<p className="text-[#333333]">AWS</p>
				</div>
				<div className="bg-[#D8FFDB] rounded-lg p-4 text-center">
					<CodeIcon className="w-8 h-8 mb-2 text-[#008F8C]" />
					<p className="text-[#333333]">Docker</p>
				</div>
			</div>
		</section>
	)
}
