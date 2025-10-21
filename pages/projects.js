export default function Projects() {
  const projects = [
    {
      title: 'Krishi Mitra AI',
      desc: 'An advanced, multilingual AI assistant for Indian farmers providing crop advisory, pest detection, weather updates, and market prices via a conversational chatbot powered by Google Gemini.',
      tech: ['Next.js', 'TypeScript', 'Gemini AI', 'Next-Intl', 'TailwindCSS'],
      img: '/assets/Screenshot%202025-10-21%20222334.png', // You may need to update this image path
      demo: 'https://krishi-mitra-ai-app-p5st.vercel.app/',
      github: 'https://github.com/shahdhruvp16/krishi-mitra-ai-app' // Corrected this based on your other repos
    },
    {
      title: 'Sign Language Translator',
      desc: 'Built a real-time sign recognition system using MediaPipe & Random Forest, supporting English, Hindi, and Gujarati with live speech output. Improved accessibility for the deaf & mute community.',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'Streamlit'],
      img: '/assets/speaksign.png',
      demo: 'https://www.linkedin.com/posts/dhruv-shah-27111b28a_itmbu-signlanguagerecognition-computervision-activity-7319052955360354316-cadX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYkCLUBFxRbHZqbCniFklj31dl2R5NGXD8',
      github: 'https://github.com/shahdhruvp16/Sign-Language-Transalator'
    },
    {
      title: 'Checkers Game (AI)',
      desc: 'Developed a Minimax-based AI checkers game with a 3D-like board, timers, undo feature, and celebration animations for winning scenarios.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      img: '/assets/Checkers.png',
      demo: 'https://checkers-game-using-ai.vercel.app/',
      github: 'https://github.com/shahdhruvp16/Checkers-Game-Using-AI'
    },
    {
      title: 'Brain Tumor Detector',
      desc: 'Automated brain tumor detection from MRI scans using deep learning and computer vision for accurate medical diagnosis.',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'Streamlit', 'Deep Learning'],
      img: '/assets/Braintumor.png',
      demo: 'https://github.com/shahdhruvp16/BrainTumorDetector',
      github: 'https://github.com/shahdhruvp16/BrainTumorDetector'
    },
    {
      title: 'NemiZen - Web Services provider',
      desc: 'We combine technology with peace and purpose to create digital solutions that make a difference.',
      tech: ['NextJS', 'TypeScript', 'TailwindCSS', 'Node.js'],
      img: '/assets/Nemizen.png',
      demo: 'https://nemizen.vercel.app/',
      github: 'https://github.com/shahdhruvp16/nemizentest.git'
    },
    {
      title: 'RECIPEDIA',
      desc: 'Contributed to Recipedia, a MERN-based recipe-sharing platform with personalized collections, interactive features, and a seamless user experience.',
      tech: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'React.js'],
      img: '/assets/Recipedia.jpeg',
      demo: 'https://recipedia-frontend-q872.onrender.com',
      github: 'https://github.com/shahdhruvp16/RECIPEDIA'
    }
  ];

  return (
    <div className="text-white pt-10 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold font-orbitron">Projects</h1>

      {/* Projects Grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, idx) => (
          <article
            key={idx}
            className="p-4 sm:p-5 rounded-lg nav-glass hover:scale-[1.02] transition-transform duration-300 flex flex-col"
          >
            {/* Image Preview */}
            {p.img && (
              <img
                src={p.img}
                alt={`${p.title} preview`}
                className="rounded-md mb-3 w-full h-40 sm:h-48 object-cover"
              />
            )}

            {/* Project Title */}
            <h2 className="font-semibold text-base sm:text-lg">{p.title}</h2>

            {/* Description */}
            <p className="text-xs sm:text-sm opacity-80 mt-2 flex-1">{p.desc}</p>

            {/* Tech Stack */}
            <div className="mt-3 flex gap-2 flex-wrap">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded bg-gradient-to-r from-primary/30 to-teal/30 text-xs"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-4 flex gap-2 flex-wrap">
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm px-3 py-1 rounded bg-white/10 hover:bg-white/20 transition"
                >
                  Live Demo
                </a>
              )}
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm px-3 py-1 rounded bg-white/10 hover:bg-white/20 transition"
                >
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
