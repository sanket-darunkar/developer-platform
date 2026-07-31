const skills = [
  "Java",
  "Spring Boot",
  "Hibernate",
  "REST API",
  "MySQL",
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "Postman",
];

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <p className="mb-3 text-center uppercase tracking-[4px] text-cyan-400">
          Skills
        </p>

        <h2 className="mb-14 text-center text-5xl font-bold text-white">
          Technologies I Work With
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <h3 className="text-xl font-semibold text-white">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;