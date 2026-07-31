function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center">

        <p className="text-cyan-400 text-lg">
          Hello, I'm
        </p>

        <h1 className="mt-4 text-6xl font-bold text-white">
          Sanket Darunkar
        </h1>

        <h2 className="mt-6 text-2xl text-gray-300">
          Java Backend Developer
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
          I build scalable backend applications using Java,
          Spring Boot, Hibernate, REST APIs, and modern web
          technologies.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <button className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black hover:bg-cyan-400 transition">
            Hire Me
          </button>

          <button className="rounded-lg border border-gray-600 px-6 py-3 text-white hover:border-cyan-400 transition">
            Download Resume
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;