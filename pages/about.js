export default function About() {
  return (
    <div className="text-white pt-10 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold">About Me</h1>

      {/* Content Grid */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        
        {/* Profile Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/assets/profile.jpg" // <-- place your image in the public/ folder
            alt="Dhruv Shah"
            className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover shadow-lg border-4 border-primary"
          />
        </div>

        {/* Text Content */}
        <div className="md:col-span-2">
          <p className="opacity-90 text-sm sm:text-base">
            Hi, I’m <span className="text-primary font-semibold">Dhruv Shah</span> — 
            a visionary <span className="text-teal font-semibold">Web Developer</span>, 
            <span className="text-teal font-semibold"> AI/ML Engineer</span>, 
            and passionate <span className="text-teal font-semibold">Open-Source Contributor </span>  
            dedicated to building intelligent, scalable, and user-friendly solutions.
            Currently pursuing my <strong>B.Tech in Computer Science & Engineering</strong> at 
            ITM (SLS) Baroda University with a CPI of <strong>7.98/10</strong>.
          </p>

          <p className="opacity-90 mt-3 text-sm sm:text-base">
            I specialize in merging <strong>cutting-edge AI/ML</strong> with modern web
            technologies to craft applications that aren’t just functional, but also
            visually immersive. My projects reflect this blend — 
            from a real-time <strong>Sign Language Translator</strong> supporting
            multiple languages & speech output, to an
            <strong> AI-powered Checkers Game</strong> with a 3D interactive board and smart move prediction.
          </p>

          <p className="opacity-90 mt-3 text-sm sm:text-base">
            I believe in learning fast, thinking creatively, and turning ambitious ideas
            into reality — whether that’s solving accessibility challenges, designing
            engaging UI/UX, contributing to impactful open-source projects, or optimizing
            backend logic for performance and scalability.
          </p>

          {/* Skills Section */}
          <h3 className="mt-6 font-semibold text-lg sm:text-xl">Core Skills & Technologies</h3>
          <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "Python",
              "JavaScript",
              "React.js",
              "Node.js",
              "AI/ML",
              "OpenCV",
              "MongoDB",
              "TailwindCSS"
            ].map(skill => (
              <div
                key={skill}
                className="p-3 rounded nav-glass text-sm sm:text-base hover:scale-105 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
