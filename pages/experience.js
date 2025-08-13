export default function Experience() {
  const items = [
    {
      period: 'July 2025 – Present',
      role: '.NET Developer Intern',
      company: 'L&T Energy Hydrocarbon Ltd.',
      logo: 'https://clipground.com/images/lt-logo-clipart.jpg',
      bullets: [
        'Developing and maintaining scalable .NET-based web applications.',
        'Enhanced UI/UX with ASP.NET MVC and Razor Pages, improving user satisfaction.'
      ]
    },
    {
      period: 'Sept 2023 – Present',
      role: 'Social Media Content & Outreach Volunteer',
      company: 'Hexsociety',
      logo: 'https://www.hexsociety.in/assets/images/logo.png',
      bullets: [
        'Produced tech educational content reaching 5,000+ online learners.',
        'Designed interactive quizzes, boosting engagement by 30%.'
      ]
    },
    {
      period: 'May 2025',
      role: 'Communication & Web Dev Intern',
      company: 'Nobel Navigators (Remote)',
      logo: 'https://nobelnavigators.com/wp-content/uploads/2021/08/logo.png',
      bullets: [
        'Built custom WordPress themes and plugins, reducing page load time by 40%.'
      ]
    },
    {
      period: 'Jan – March 2025',
      role: 'Web Dev Intern',
      company: 'Innomatics Research Lab',
      logo: 'https://thf.bing.com/th/id/OIP.rQqyKN6JfCRL6QTmJJsGGAHaHa',
      bullets: [
        'Full-stack development with React, Node.js, and MongoDB.',
        'Integrated REST APIs to enable real-time data updates.'
      ]
    },
    {
      period: 'June – July 2024',
      role: 'Web Dev Intern',
      company: 'Shree Amrit Vidhyalaya',
      logo: 'https://amritvidyalaya.org/wp-content/uploads/2019/10/3449-2.png',
      bullets: [
        'Worked on real-world educational projects in a 1-month internship.',
        'Solved market-driven challenges using modern web technologies.'
      ]
    },
    {
      period: 'Feb – March 2024',
      role: 'Web Dev Intern',
      company: 'Bharat Intern',
      logo: 'https://tse1.mm.bing.net/th/id/OIP.moJgyVDMk2qxCrHYN-_jIAHaEK',
      bullets: [
        'Enhanced practical skills by tackling real-world development challenges.',
        'Strengthened problem-solving and technical proficiency.'
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
