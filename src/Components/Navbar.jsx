import logo from '/images/logo.png'
import { GiCancel } from "react-icons/gi";
import { IoMenuSharp } from "react-icons/io5";
import { MdHome, MdInfoOutline, MdMiscellaneousServices, MdFolder, MdCardMembership, MdContactMail } from "react-icons/md";
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/* Removes white background from PNG using Canvas */
const TransparentLogo = ({ src, className, threshold = 230 }) => {
  const [dataUrl, setDataUrl] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i], g = data[i + 1], b = data[i + 2];
        if (r > threshold && g > threshold && b > threshold) {
          data[i + 3] = 0; // Make white pixels fully transparent
        }
      }
      ctx.putImageData(imageData, 0, 0);
      setDataUrl(canvas.toDataURL('image/png'));
    };
    img.src = src;
  }, [src, threshold]);

  return <img src={dataUrl || src} alt="logo" className={className} />;
};

const Navbar = ({ theme, setTheme }) => {
  const [sidebar, setSidebar] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const sidebarRef = useRef(null);
  const menuIconRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebar && sidebarRef.current && !sidebarRef.current.contains(event.target) && menuIconRef.current && !menuIconRef.current.contains(event.target)) {
        setSidebar(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [sidebar]);

  return (
    <div className='relative bg-[var(--navbar-bg)] flex items-center justify-between px-4 sm:px-8 lg:px-16 xl:px-24 py-4
    sticky top-0 z-20 backdrop-blur-xl font-medium transition-colors duration-300'>

      {/* Blue running line at bottom of navbar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--bg-secondary)] overflow-hidden">
        <div className="absolute top-0 h-full w-full bg-gradient-to-r from-transparent via-[#00f3ff] to-transparent animate-slide-line opacity-90"></div>
      </div>

      <div className="relative rounded-full overflow-hidden shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 flex items-center justify-center">
        {/* Spinning Gold Border - Sweeping gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,transparent_50%,var(--accent)_100%)] z-0"></div>
        
        {/* Inner Dark Circle holding the logo safely inside the border */}
        <div className="absolute inset-[3px] bg-[var(--navbar-bg)] rounded-full z-10 flex items-center justify-center p-1 overflow-hidden">
          <TransparentLogo src={logo} className='w-full h-full object-contain' />
        </div>
      </div>

      <h1 className='text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-wide text-[var(--accent)] m-2 text-center whitespace-nowrap overflow-hidden text-ellipsis flex items-center justify-center'>
        {"NAZIYAH CREED".split("").map((letter, index) => (
          <motion.span
            key={index}
            className={`relative inline-block ${letter === " " ? "w-2 sm:w-4" : ""}`}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 12, 
              delay: index * 0.05,
              repeat: Infinity,
              repeatDelay: 5
            }}
          >
            {letter}
            {letter !== " " && (
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] bg-[#00f3ff] shadow-[0_0_8px_#00f3ff]"
                initial={{ width: "0%" }}
                animate={{ width: ["0%", "100%", "0%"], left: ["0%", "0%", "100%"] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut", 
                  delay: index * 0.1 
                }}
              />
            )}
          </motion.span>
        ))}
      </h1>

      {/* Overlay for sidebar */}
      {sidebar && (
        <div 
          className="fixed left-0 top-0 w-full h-full bg-black/50 backdrop-blur-sm z-40 sm:hidden cursor-pointer"
          style={{ position: 'fixed', inset: 0 }}
          onClick={() => setSidebar(false)}
        ></div>
      )}

      <div ref={sidebarRef} className={`flex text-[var(--text-primary)] sm:text-sm 
        ${!sidebar ? 'max-sm:hidden' : 'max-sm:z-50 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--accent)] to-[var(--accent-secondary)] shadow-2xl '}
        gap-3 lg:gap-5 transition-all sm:items-center 
        max-sm:fixed max-sm:right-0 max-sm:top-0 max-sm:bottom-0
        max-sm:w-64 max-sm:min-h-screen max-sm:h-full
        max-sm:flex-col max-sm:pl-8 max-sm:pt-20 max-sm:items-start
        text-2xl shrink-0`}>

        <GiCancel
          className='text-3xl text-[var(--accent)] cursor-pointer sm:hidden absolute top-5 right-5'
          onClick={() => setSidebar(false)}
        />

        {/* Sidebar brand label */}
        <p className="sm:hidden text-xs uppercase tracking-[4px] text-[var(--accent)] mb-2 font-bold opacity-70">Navigation</p>

        <a href="/#home" onClick={() => setSidebar(false)}
          className='flex items-center gap-2 sm:hover:border-b sm:hover:border-2 sm:hover:border-[var(--text-primary)] sm:hover:text-[var(--accent)] text-base sm:text-base font-semibold tracking-wide text-white hover:text-[var(--accent)] max-sm:border-l-2 max-sm:border-transparent max-sm:hover:border-[var(--accent)] max-sm:pl-3 transition-all duration-200'>
          <MdHome className="text-2xl" /> Home
        </a>

        <a href="/#about" onClick={() => setSidebar(false)}
          className='flex items-center gap-2 sm:hover:border-b sm:hover:border-2 sm:hover:border-[var(--text-primary)] sm:hover:text-[var(--accent)] text-base sm:text-base font-semibold tracking-wide text-white hover:text-[var(--accent)] max-sm:border-l-2 max-sm:border-transparent max-sm:hover:border-[var(--accent)] max-sm:pl-3 transition-all duration-200'>
          <MdInfoOutline className="text-2xl" /> About
        </a>

        <a href="/#service" onClick={() => setSidebar(false)}
          className='flex items-center gap-2 sm:hover:border-b sm:hover:border-2 sm:hover:border-[var(--text-primary)] sm:hover:text-[var(--accent)] text-base sm:text-base font-semibold tracking-wide text-white hover:text-[var(--accent)] max-sm:border-l-2 max-sm:border-transparent max-sm:hover:border-[var(--accent)] max-sm:pl-3 transition-all duration-200'>
          <MdMiscellaneousServices className="text-2xl" /> Services
        </a>

        <a href="/#projects" onClick={() => setSidebar(false)}
          className='flex items-center gap-2 sm:hover:border-b sm:hover:border-2 sm:hover:border-[var(--text-primary)] sm:hover:text-[var(--accent)] text-base sm:text-base font-semibold tracking-wide text-white hover:text-[var(--accent)] max-sm:border-l-2 max-sm:border-transparent max-sm:hover:border-[var(--accent)] max-sm:pl-3 transition-all duration-200'>
          <MdFolder className="text-2xl" /> Projects
        </a>

        <a href="/#certificates" onClick={() => setSidebar(false)}
          className='flex items-center gap-2 sm:hover:border-b sm:hover:border-2 sm:hover:border-[var(--text-primary)] sm:hover:text-[var(--accent)] text-base sm:text-base font-semibold tracking-wide text-white hover:text-[var(--accent)] max-sm:border-l-2 max-sm:border-transparent max-sm:hover:border-[var(--accent)] max-sm:pl-3 transition-all duration-200'>
          <MdCardMembership className="text-2xl" /> Certificates
        </a>

        <a href="/#contact" onClick={() => setSidebar(false)}
          className='flex items-center gap-2 sm:hover:border-b sm:hover:border-2 sm:hover:border-[var(--text-primary)] sm:hover:text-[var(--accent)] text-base sm:text-base font-semibold tracking-wide text-white hover:text-[var(--accent)] max-sm:border-l-2 max-sm:border-transparent max-sm:hover:border-[var(--accent)] max-sm:pl-3 transition-all duration-200'>
          <MdContactMail className="text-2xl" /> Contact
        </a>

        <div className="sm:hidden w-10 border-t border-[var(--accent)] opacity-30 my-1"></div>

        {/* Theme Switcher - Inline on mobile, dropdown on desktop */}
        <div className="relative">
          {/* Desktop: dropdown button */}
          <button
            onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
            className="hidden sm:block text-base border border-[var(--text-primary)] px-3 py-1 rounded-md hover:bg-[var(--accent)] hover:text-white transition-all focus:outline-none"
          >
            Theme
          </button>

          {/* Desktop dropdown */}
          {themeDropdownOpen && (
            <>
              <div className="fixed inset-0 z-30" onClick={() => setThemeDropdownOpen(false)}></div>
              <div className="absolute right-0 mt-2 w-32 bg-[var(--bg-secondary)] border border-[var(--text-secondary)] rounded-md shadow-lg z-40">
                <button
                  onClick={() => { setTheme('theme-default'); setThemeDropdownOpen(false); }}
                  className={`block w-full text-left px-4 py-2 hover:bg-[var(--accent)] ${theme === 'theme-default' ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'} hover:text-white`}
                >
                  Naziyah
                </button>
                <button
                  onClick={() => { setTheme('theme-black'); setThemeDropdownOpen(false); }}
                  className={`block w-full text-left px-4 py-2 hover:bg-[var(--accent)] ${theme === 'theme-black' ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'} hover:text-white`}
                >
                  Black
                </button>
              </div>
            </>
          )}

          {/* Mobile: inline theme buttons directly inside sidebar */}
          <div className="sm:hidden flex flex-col gap-2 mt-1">
            <p className="text-sm text-[var(--text-primary)] opacity-70 uppercase tracking-widest">Theme</p>
            <div className="flex gap-3">
              <button
                onClick={() => { setTheme('theme-default'); setSidebar(false); }}
                className={`px-4 py-1 rounded-full border text-sm font-semibold transition-all ${theme === 'theme-default' ? 'bg-[var(--accent)] text-white border-[var(--accent)]' : 'border-[var(--text-primary)] text-[var(--text-primary)]'}`}
              >
                Naziyah
              </button>
              <button
                onClick={() => { setTheme('theme-black'); setSidebar(false); }}
                className={`px-4 py-1 rounded-full border text-sm font-semibold transition-all ${theme === 'theme-black' ? 'bg-[var(--accent)] text-white border-[var(--accent)]' : 'border-[var(--text-primary)] text-[var(--text-primary)]'}`}
              >
                Black
              </button>
            </div>
          </div>
        </div>
      </div>

      <div ref={menuIconRef}>
        <IoMenuSharp className='text-3xl text-[var(--text-primary)] cursor-pointer sm:hidden' onClick={() => setSidebar(true)} />
      </div>
    </div>
  )
}

export default Navbar;
