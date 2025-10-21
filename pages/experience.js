export default function Experience() {
  const items = [
    {
      period: 'July 2025 – Present',
      role: '.NET Developer Intern',
      company: 'L&T Energy Hydrocarbon Ltd.',
      logo: 'https://clipground.com/images/lt-logo-clipart.jpg',
      bullets: [
        'Developed enterprise web applications and critical internal tools using .NET.',
        'Improved application UI/UX by building responsive pages with ASP.NET MVC.'
      ]
    },
    {
      period: 'July 2025 – Present',
      role: 'Open Source Contributor',
      company: 'GirlScript Summer of Code',
      logo: 'https://imgs.search.brave.com/_d5CB-J8blcHbnyhaRkGHUEuzqrBbcH2x_DBuzy_fS4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMSpaZllXWE4w/ekE2VHFRUTd3R05K/VU9nLmpwZWc',
      bullets: [
        'Contributed to open-source projects with a focus on front-end enhancements.',
        'Resolved complex bugs and collaborated with a global team using Git & GitHub.'
      ]
    },
    {
      period: 'Sept 2023 – Present',
      role: 'Social Media Content & Outreach Volunteer',
      company: 'Hexsociety',
      logo: 'https://www.hexsociety.in/assets/images/logo.png',
      bullets: [
        'Created engaging educational content on emerging tech for a wide audience.',
        'Designed interactive technical quizzes to significantly boost user engagement.'
      ]
    },
    {
      period: 'May 2025',
      role: 'Communication & Web Dev Intern',
      company: 'Nobel Navigators (Remote)',
      logo: 'https://nobelnavigators.com/wp-content/uploads/2021/08/logo.png',
      bullets: [
        'Built and launched dynamic, client-focused websites using the WordPress platform.',
      ]
    },
    {
      period: 'Jan – March 2025',
      role: 'Web Dev Intern',
      company: 'Innomatics Research Lab',
      logo: 'https://thf.bing.com/th/id/OIP.rQqyKN6JfCRL6QTmJJsGGAHaHa',
      bullets: [
        'Developed full-stack web applications utilizing the MERN (MongoDB, React) stack.',
        'Integrated third-party APIs to extend features and enable real-time data flow.'
      ]
    },
    {
      period: 'June – July 2024',
      role: 'Web Dev Intern',
      company: 'Shree Amrit Vidhyalaya',
      logo: 'https://amritvidyalaya.org/wp-content/uploads/2019/10/3449-2.png',
      bullets: [
        'Worked on real-world educational projects in a fast-paced 1-month internship.',
        'Solved market-driven challenges using modern and emerging web technologies.'
      ]
    },
    {
      period: 'Feb – March 2024',
      role: 'Web Dev Intern',
      company: 'Bharat Intern',
      logo: 'https://tse1.mm.bing.net/th/id/OIP.moJgyVDMk2qxCrHYN-_jIAHaEK',
      bullets: [
        'Enhanced practical skills by tackling a variety of real-world development tasks.',
        'Strengthened problem-solving abilities and overall technical proficiency.'
      ]
    }
  ];

  return (
    <div className="text-white pt-10 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold font-orbitron">Experience</h1>

      {/* Experience Items */}
      <div className="mt-6 space-y-6">
        {items.map((it, idx) => (
          <article
            key={idx}
            className="p-4 sm:p-5 rounded-lg nav-glass flex flex-col sm:flex-row sm:items-start gap-4 hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Logo */}
            {it.logo && (
              <img
                src={it.logo}
                alt={`${it.company} logo`}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-md bg-white p-1 flex-shrink-0"
              />
            )}

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <h2 className="font-semibold text-base sm:text-lg">
                    {it.role} — {it.company}
                  </h2>
                  <p className="text-xs sm:text-sm opacity-70">{it.period}</p>
                </div>
              </div>
              <ul className="mt-3 list-disc list-inside text-xs sm:text-sm opacity-90 space-y-1">
                {it.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
