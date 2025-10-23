import Link from 'next/link'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  // Typewriter effect roles
  const roles = [
    "Full Stack Developer",
    "AI/ML Engineer",
    "UI/UX Enthusiast",
    "Tech Innovator"
  ];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayed.length < roles[currentRole].length) {
        timeout = setTimeout(() => {
          setDisplayed(roles[currentRole].slice(0, displayed.length + 1));
        }, 50);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayed('');
        setTyping(true);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }, 600);
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, currentRole, roles]);

  return (
    <>
      {/* SEO Meta */}
      <Head>
        <title>Dhruv Shah | Web Developer & AI/ML Engineer</title>
        <meta
          name="description"
          content="Dhruv Shah is a Web Developer & AI/ML Engineer specializing in modern, scalable, and intelligent web solutions."
        />
        <meta
          name="keywords"
          content="Dhruv Shah, Web Developer, AI Engineer, Machine Learning, React Developer, Portfolio"
        />
        <meta name="author" content="Dhruv Shah" />
        <meta property="og:title" content="Dhruv Shah | Web Developer & AI/ML Engineer" />
        <meta property="og:description" content="Explore Dhruv Shah's portfolio — modern web apps, AI/ML projects, and interactive experiences." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com" />
      </Head>

      <div className="text-white font-rajdhani px-4">
        <section className="pt-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron leading-snug">
            Hi, I’m Dhruv Shah — <span className="text-primary">Web Developer</span> & <span className="text-teal">AI/ML Innovator</span>
          </h1>

          {/* Typewriter Effect */}
          <div className="h-10 flex justify-center items-center mt-2">
            <span className="text-lg sm:text-xl md:text-2xl font-semibold text-primary font-orbitron">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Tagline with colorful words */}
          <p className="mt-4 text-lg opacity-90 font-orbitron max-w-3xl mx-auto flex flex-wrap justify-center gap-x-2">
            <span className="bg-gradient-to-r from-primary to-teal bg-clip-text text-transparent">ᴡᴀᴋᴇ.</span>
            <span className="bg-gradient-to-r from-teal to-primary bg-clip-text text-transparent">ᴄᴏᴅᴇ.</span>
            <span className="bg-gradient-to-r from-pink-500 to-primary bg-clip-text text-transparent">ᴄᴏғғᴇᴇ.</span>
            <span className="bg-gradient-to-r from-primary to-teal bg-clip-text text-transparent">ᴄᴏᴅᴇ.</span>
            <span className="bg-gradient-to-r from-teal to-primary bg-clip-text text-transparent">sʟᴇᴇᴘ.</span>
            <span className="bg-gradient-to-r from-pink-500 to-primary bg-clip-text text-transparent">ᴅʀᴇᴀᴍ</span>
            <span className="bg-gradient-to-r from-primary to-teal bg-clip-text text-transparent">ɪɴ</span>
            <span className="bg-gradient-to-r from-teal to-primary bg-clip-text text-transparent">ᴄᴏᴅᴇ.</span>
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <Link
              href="/projects"
              className="px-5 py-3 rounded-md bg-gradient-to-r from-primary to-teal text-black font-semibold shadow-md font-orbitron hover:scale-105 transition-transform"
            >
              Explore My Work
            </Link>
            <Link
              href="/maze"
              className="px-5 py-3 rounded-md border border-white/10 hover:bg-white/5 font-orbitron hover:scale-105 transition-transform"
            >
              Play Maze Game
            </Link>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mt-12">
          <h2 className="text-xl sm:text-2xl font-semibold font-orbitron">Featured Projects</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg nav-glass hover:scale-[1.02] transition-transform">
              <div className="font-semibold">Sign Language Translator (ML)</div>
              <div className="text-sm opacity-80 mt-2">
                Real-time sign recognition using MediaPipe + Random Forest; multilingual output (EN/HIN/GUJ) + speech.
              </div>
              <div className="mt-3 flex gap-2 flex-wrap">
                <a
                  href="https://www.linkedin.com/posts/dhruv-shah-27111b28a_itmbu-signlanguagerecognition-computervision-activity-7319052955360354316-cadX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-1 rounded bg-white/10 hover:bg-white/20"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/shahdhruvp16/Sign-Language-Transalator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-1 rounded bg-white/10 hover:bg-white/20"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="p-4 rounded-lg nav-glass hover:scale-[1.02] transition-transform">
              <div className="font-semibold">AutoBI – AI-Powered Data-to-Dashboard</div>
<div className="text-sm opacity-80 mt-2">
  AI-driven tool that transforms CSV data into interactive Power BI & Tableau dashboards with insights, summaries, and customizable templates.
</div>

              <div className="mt-3 flex gap-2 flex-wrap">
                <a
                  href="https://autobi-ai-powered-data-to-dashboard.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-1 rounded bg-white/10 hover:bg-white/20"
                >
                  Play
                </a>
                <a
                  href="https://github.com/shahdhruvp16/autobi---ai-powered-data-to-dashboard-generator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-1 rounded bg-white/10 hover:bg-white/20"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
