import { Projects, Learning, Skills, References, Education, Contact } from "@/components/home"

export default function Home() {
  return (
      <main className="container mx-auto max-w-5xl py-12 px-4 md:px-6">
        {/* <Nav /> */}
        <section>
          <h2 className="text-2xl font-bold mb-4">About me</h2>
          <p className="text-[#333333]">
            Web Developer with 8 years of expertise in developing web and mobile applications. Proficient in Angular, TypeScript, HTML5, CSS3, and responsive design. Demonstrated ability to work effectively within both large and small teams, as well as independently. Skilled in collaborating with cross-functional teams, utilizing Agile methodologies, and employing best practices in software development. Committed to continuous learning and staying updated with the latest industry trends and technologies.
          </p>
        </section>

        <Projects />
        <Skills />
        <References />
        <Education />
        <Contact />
        <Learning />
      </main>
  );
}