import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="text-white pt-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold">Let’s Connect</h1>
      <p className="mt-3 opacity-80 max-w-2xl text-sm sm:text-base">
        Have a project in mind, want to collaborate, or just want to say hi?  
        Fill out the form below or reach out through my socials — I’d love to hear from you!
      </p>

      {/* Contact Form */}
      <form className="mt-8 max-w-xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
        </div>
        <textarea
          placeholder="Your Message"
          rows={6}
          className="w-full p-3 rounded bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary transition"
        />
        <button
          type="submit"
          className="mt-2 w-full sm:w-auto px-5 py-3 rounded bg-gradient-to-r from-primary to-teal text-black font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="mt-10">
        <h2 className="text-lg sm:text-xl font-semibold mb-3">Find me on</h2>
        <div className="flex flex-wrap gap-5 text-2xl">
          <a
            href="https://github.com/shahdhruvp16"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dhruv-shah-27111b28a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/shahdhruvp/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/shahdhruvp16"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}
