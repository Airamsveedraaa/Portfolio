import {projects} from "./data/projects"
export default function Home() {
  return (
    <main className="min-h-screen p-8">
      {/* Hero */}
      <section>
        <h1 className="text-4xl font-bold">Luis Saavedra </h1>
        <p className="text-lg mt-2">Estudiante de Ingeniería Informática · UHU</p>
      </section>

    {/* Proyectos */}
<section className="mt-12">
  <h2 className="text-2xl font-semibold">Proyectos</h2>
  <div className="mt-4 flex flex-col gap-4">
    {projects.map((project) => (
      <div key={project.name} className="border border-white/20 rounded-lg p-4">
        <h3 className="text-xl font-bold">{project.name}</h3>
        <p className="mt-1 text-gray-400">{project.description}</p>
        <div className="mt-2 flex gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-xs bg-white/10 px-2 py-1 rounded">{t}</span>
          ))}
        </div>
        <a href={project.github} className="mt-2 inline-block text-sm text-blue-400 hover:underline">
          Ver en GitHub →
        </a>
      </div>
    ))}
  </div>
</section>

      {/* Sobre mí */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Sobre mí</h2>
          <p className="mt-4 text-gray-400 max-w-2xl leading-relaxed">
              Soy un Estudiante de Ingeniería Informática especializándose en la rama de computación, en la que se tratan temas enfocados hacia la IA y algoritmia en mi opinión.
              En mis ratos libres me dedico a aprender ciberseguridad por mi cuenta entre otras cosas, me gusta trastear y curiosear.      
          </p>
      </section>

{/* Contacto */}
<section className="mt-12">
  <h2 className="text-2xl font-semibold">Contacto</h2>
  <div className="mt-4 flex gap-6">
    
      <a href="https://github.com/Airamsveedraaa"
      target="_blank"
      className="text-blue-400 hover:underline"
    >
      GitHub →
    </a>
    
   <a href="https://www.linkedin.com/in/luis-saavedra-paiseo-230b10268/"
  target="_blank"
  className="text-blue-400 hover:underline"
>
  LinkedIn →
</a>
  </div>
</section>
    </main>
  );
}