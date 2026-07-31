function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center px-6 py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-2">

        {/* Left Side */}
        <div className="flex justify-center">
          <div className="flex h-80 w-80 items-center justify-center rounded-3xl border border-cyan-400/20 bg-slate-900 text-7xl font-bold text-cyan-400 shadow-xl">
            SD
          </div>
        </div>

        {/* Right Side */}
        <div>

          <p className="mb-3 text-cyan-400 uppercase tracking-[4px]">
            About Me
          </p>

          <h2 className="mb-6 text-5xl font-bold text-white">
            Java Backend Developer
          </h2>

          <p className="mb-8 leading-8 text-gray-400">
            I am a Java Backend Developer passionate about building
            scalable REST APIs and modern web applications. My primary
            expertise lies in Java, Spring Boot, Hibernate, MySQL,
            and RESTful services. I also enjoy building responsive
            frontend applications using React and continuously learning
            modern technologies.
          </p>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">15+</h3>
              <p className="text-gray-400">Projects Built</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">Java</h3>
              <p className="text-gray-400">Backend Specialist</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">REST</h3>
              <p className="text-gray-400">API Development</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">Open</h3>
              <p className="text-gray-400">For Freelancing</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;