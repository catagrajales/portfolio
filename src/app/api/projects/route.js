import { projects } from "./projects";
export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const projectsData = projects.map((project) => {
          return {
            id: project.id,
            name: project.name,
            year: project.year,
            company: project.company,
            languages: project.languages,
            short_description: project.short_description,
            image: project.images[0]
          };
        });
        res.status(200).json({ success: true, data: projectsData });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'POST':
    //   try {
    //     const producto = await Producto.create(req.body);
    //     res.status(201).json({ success: true, data: producto });
    //   } catch (error) {
    //     res.status(400).json({ success: false });
    //   }
    //   break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
