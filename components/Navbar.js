import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/resume', label: 'Resume' },
    { href: '/contact', label: 'Contact' },
    { href: '/maze', label: 'Maze Game' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl p-3 flex items-center justify-between rounded-2xl nav-glass shadow-lg z-50">
      
      {/* Profile + Name */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <img
            src="/assets/profile.jpg"
            alt="Dhruv Shah"
            className="w-10 h-10 rounded-full object-cover border-2 border-primary"
          />
        </div>
        <div className="text-sm">
          <div className="font-brand">Dhruv Shah</div>
          <div className="text-[11px] opacity-70 font-rajdhani">
            Web Dev · AI/ML
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 text-sm font-rajdhani">
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className={`px-2 py-1 rounded-md transition-all ${
              router.pathname === it.href
                ? 'text-primary underline underline-offset-4'
                : 'opacity-80 hover:opacity-100'
            }`}
          >
            {it.label}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-black/80 rounded-lg shadow-lg md:hidden p-3 space-y-2">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 rounded-md transition-all ${
                router.pathname === it.href
                  ? 'text-primary underline underline-offset-4'
                  : 'opacity-80 hover:opacity-100'
              }`}
            >
              {it.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
