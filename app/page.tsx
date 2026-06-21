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
      </section>

      {/* Sobre mí */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Sobre mí</h2>
      </section>

      {/* Contacto */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Contacto</h2>
      </section>
    </main>
  );
}