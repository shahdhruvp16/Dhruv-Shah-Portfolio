import Navbar from './Navbar'
import Footer from './Footer'
import { useEffect } from 'react'

export default function Layout({children}){
  useEffect(()=>{
    // ensure particle script is loaded in browser; it's included in public/js/particles.js
    if (typeof window !== 'undefined' && !window.__particlesLoaded){
      const script = document.createElement('script');
      script.src = '/js/particles.js';
      script.async = true;
      document.body.appendChild(script);
      window.__particlesLoaded = true;
    }
  },[]);
  return (
    <div>
      <canvas id="particle-canvas"></canvas>
      <div className="main-container">
        <Navbar />
        <main className="pt-28 px-6 pb-20 min-h-[80vh] max-w-5xl mx-auto">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
