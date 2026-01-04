import logo from '/images/logo.png'
import { GiCancel } from "react-icons/gi";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ theme, setTheme }) => {
  const [sidebar, setSidebar] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  return (
    <>
      {/* Global Backdrop for mobile sidebar */}
      {sidebar && (
        <div 
          className="fixed inset-0 bg-black/60 z-[9998] sm:hidden" 
          onClick={() => setSidebar(false)}
        ></div>
      )}

      {/* Main Navbar */}
      <div className='bg-[var(--navbar-bg)] flex items-center justify-between px-4 sm:px-8 lg:px-16 xl:px-24 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium transition-colors duration-300'>

        <img src={logo} alt="logo" className='w-12 sm:w-16 md:w-24 lg:w-32 rounded-full object-cover bg-white shrink-0' />

        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold m-2 text-center whitespace-nowrap overflow-hidden text-ellipsis golden-text'>
          NAZIYAH CREED
        </motion.h1>

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex text-[var(--text-primary)] sm:text-sm gap-3 lg:gap-5 items-center shrink-0">
          <a href="/#home" className='text-xl sm:text-base hover:scale-105 transition-all golden-hover-line'>Home</a>
          <a href="/#about" className='text-xl sm:text-base hover:scale-103 transition-all golden-hover-line'>About</a>
          <a href="/#service" className='text-xl sm:text-base hover:scale-103 transition-all golden-hover-line'>Services</a>
          <a href="/#projects" className='text-xl sm:text-base hover:scale-103 transition-all golden-hover-line'>Projects</a>
          <a href="/#certificates" className='text-xl sm:text-base hover:scale-103 transition-all golden-hover-line'>Certificates</a>
          <a href="/#contact" className='text-xl sm:text-base hover:scale-103 transition-all golden-hover-line'>Contact</a>
          
          {/* Theme Switcher Desktop */}
            <button
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="text-xl sm:text-base border border-[var(--text-primary)] px-3 py-1 rounded-md hover:golden-bg hover:text-black transition-all focus:outline-none"
            >
              Theme
            </button>
            {themeDropdownOpen && (
              <>
                <div className="fixed inset-0 z-30" onClick={() => setThemeDropdownOpen(false)}></div>
                <div className="absolute right-0 mt-2 w-32 bg-[var(--bg-secondary)] border border-[var(--text-secondary)] rounded-md shadow-lg z-40">
                  <button onClick={() => { setTheme('theme-default'); setThemeDropdownOpen(false); }} className={`block w-full text-left px-4 py-2 hover:golden-bg ${theme === 'theme-default' ? 'golden-text' : 'text-[var(--text-primary)]'} hover:text-black`}>Brothers Theme</button>
                  <button onClick={() => { setTheme('theme-light'); setThemeDropdownOpen(false); }} className={`block w-full text-left px-4 py-2 hover:golden-bg ${theme === 'theme-light' ? 'golden-text' : 'text-[var(--text-primary)]'} hover:text-black`}>White</button>
                  <button onClick={() => { setTheme('theme-black'); setThemeDropdownOpen(false); }} className={`block w-full text-left px-4 py-2 hover:golden-bg ${theme === 'theme-black' ? 'golden-text' : 'text-[var(--text-primary)]'} hover:text-black`}>Black</button>
                </div>
              </>
            )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden">
          <IoMenuSharp className='text-3xl text-[var(--text-primary)] cursor-pointer' onClick={() => setSidebar(true)} />
        </div>

        {/* Golden Texture Line */}
        <div className="absolute bottom-0 left-0 right-0 golden-line opacity-80"></div>
      </div>

      {/* Mobile Sidebar */}
      <div className={"fixed top-0 bottom-0 right-0 w-64 golden-bg shadow-2xl z-[9999] transition-transform duration-300 transform sm:hidden " + 
        (sidebar ? "translate-x-0" : "translate-x-full")}>
        
        <div className="flex flex-col p-8 pt-20 gap-6 text-2xl text-black font-semibold">
          <GiCancel
            className='text-4xl text-black cursor-pointer absolute top-8 right-5'
            onClick={() => setSidebar(false)}
          />

          <a href="/#home" onClick={() => setSidebar(false)} className='golden-hover-line w-fit'>Home</a>
          <a href="/#about" onClick={() => setSidebar(false)} className='golden-hover-line w-fit'>About</a>
          <a href="/#service" onClick={() => setSidebar(false)} className='golden-hover-line w-fit'>Services</a>
          <a href="/#projects" onClick={() => setSidebar(false)} className='golden-hover-line w-fit'>Projects</a>
          <a href="/#certificates" onClick={() => setSidebar(false)} className='golden-hover-line w-fit'>Certificates</a>
          <a href="/#contact" onClick={() => setSidebar(false)} className='golden-hover-line w-fit'>Contact</a>

          {/* Mobile Theme Options */}
          <div className="mt-4 border-t border-black/20 pt-6">
            <p className="text-lg mb-4 font-bold text-black">Theme</p>
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => { setTheme('theme-default'); setSidebar(false); }} 
                className={`text-left text-lg px-4 py-2 rounded-lg border border-black/30 transition-all ${theme === 'theme-default' ? 'bg-black text-white' : 'text-black'}`}
              >
                Brothers Theme
              </button>
              <button 
                onClick={() => { setTheme('theme-light'); setSidebar(false); }} 
                className={`text-left text-lg px-4 py-2 rounded-lg border border-black/30 transition-all ${theme === 'theme-light' ? 'bg-black text-white' : 'text-black'}`}
              >
                White
              </button>
              <button 
                onClick={() => { setTheme('theme-black'); setSidebar(false); }} 
                className={`text-left text-lg px-4 py-2 rounded-lg border border-black/30 transition-all ${theme === 'theme-black' ? 'bg-black text-white' : 'text-black'}`}
              >
                Black
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
