export default function Resume() {
  return (
    <div className="text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Heading + Download */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold">Resume</h1>
        <a
          href="https://drive.google.com/file/d/1nyOc5_LsP_EBM8oVjvTf4t7a_BsvmrCI/view?usp=sharing"
          download
          className="px-5 py-3 rounded-lg bg-gradient-to-r from-primary to-teal text-black font-semibold shadow-lg hover:scale-105 transition-transform text-center"
        >
          Download PDF
        </a>
      </div>

      {/* Summary */}
      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold">Summary</h2>
        <p className="mt-2 opacity-90 text-sm sm:text-base">
          Creative and detail-oriented Web Developer & AI/ML Enthusiast with a strong foundation in
          front-end and back-end technologies. Currently pursuing B.Tech (CSE) at ITM (SLS) Baroda University. 
          Passionate about building responsive, user-friendly web applications with integrated AI/ML features 
          for enhanced interactivity and scalability.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold">Skills</h2>
        <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            "Python","JavaScript","React.js","Node.js",
            "AI/ML","OpenCV","MongoDB","TailwindCSS",
            "WordPress","C/C++"
          ].map(skill => (
            <div key={skill} className="p-3 rounded nav-glass text-center text-sm sm:text-base">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-8">
  <h2 className="text-xl sm:text-2xl font-semibold">Experience</h2>
  <div className="mt-4 space-y-4">
    {[
      {
        role: ".NET Developer Intern",
        company: "L&T Energy Hydrocarbon Ltd.",
        period: "July 2025 – Present",
        bullets: [
          "Developed enterprise web applications and critical internal tools using .NET.",
          "Improved application UI/UX by building responsive pages with ASP.NET MVC.",
        ],
      },
      {
        role: "Open Source Contributor",
        company: "GirlScript Summer of Code",
        period: "July 2025 – Present",
        bullets: [
          "Contributed to open-source projects with a focus on front-end enhancements.",
          "Resolved complex bugs and collaborated with a global team using Git & GitHub.",
        ],
      },
      {
        role: "Social Media Content & Outreach Volunteer",
        company: "Hexsociety",
        period: "Sept 2023 – Present",
        bullets: [
          "Created engaging educational content on emerging technologies for a wide audience.",
          "Designed interactive technical quizzes to significantly boost user engagement.",
        ],
      },
      {
        role: "Communication & Web Dev Intern",
        company: "Nobel Navigators (Remote)",
        period: "May – June 2025",
        bullets: [
          "Built and launched dynamic, client-focused websites using the WordPress platform.",
          "Implemented custom themes and plugins to deliver tailored solution functionality.",
        ],
      },
      {
        role: "Web Dev Intern",
        company: "Innomatics Research Lab",
        period: "Jan – March 2025",
        bullets: [
          "Developed full-stack web applications utilizing the MERN (MongoDB, React) stack.",
          "Integrated third-party APIs to extend features and enable real-time data flow.",
        ],
      },
    ].map((exp, idx) => (
      <div key={idx} className="p-4 rounded-lg nav-glass">
        <h3 className="font-semibold text-base sm:text-lg">
          {exp.role} — {exp.company}
        </h3>
        <p className="text-xs sm:text-sm opacity-70">{exp.period}</p>
        <ul className="mt-2 list-disc list-inside opacity-90 text-xs sm:text-sm space-y-1">
          {exp.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold">Education</h2>
        <div className="mt-4 space-y-4">
          <div className="p-4 rounded-lg nav-glass">
            <h3 className="font-semibold text-base sm:text-lg">
              B.Tech in Computer Science & Engineering
            </h3>
            <p className="text-xs sm:text-sm opacity-70">
              ITM (SLS) Baroda University — 2022 – Present
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-xl sm:text-2xl font-semibold">Key Projects</h2>
        <div className="mt-4 space-y-4">
          <div className="p-4 rounded-lg nav-glass">
            <h3 className="font-semibold text-base sm:text-lg">Sign Language Translator</h3>
            <p className="text-xs sm:text-sm opacity-80">
              Real-time sign recognition using MediaPipe + Random Forest; multilingual output + speech.
            </p>
          </div>
          <div className="p-4 rounded-lg nav-glass">
            <h3 className="font-semibold text-base sm:text-lg">Checkers Game (AI)</h3>
            <p className="text-xs sm:text-sm opacity-80">
              Minimax-based AI checkers with 3D-like board, timers, and animations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


