import logo from '/images/logo.png'
import { GiCancel } from "react-icons/gi";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ theme, setTheme }) => {
  const [sidebar, setSidebar] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  return (
    <div className='bg-[var(--navbar-bg)] flex items-center justify-between px-4 sm:px-8 lg:px-16 xl:px-24 py-4
    sticky top-0 z-20 backdrop-blur-xl font-medium transition-colors duration-300'>

      <img src={logo} alt="logo" className='w-12 sm:w-16 md:w-24 lg:w-32 rounded-full object-cover bg-white shrink-0' />

      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--accent)] m-2 text-center whitespace-nowrap overflow-hidden text-ellipsis'>
        NAZIYAH CREED
      </motion.h1>

      <div className={`flex text-[var(--text-primary)] sm:text-sm 
        ${!sidebar ? 'max-sm:hidden' : 'max-sm:w-60 max-sm:pl-10 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--accent)] to-[var(--accent-secondary)] shadow-2xl '}
        gap-3 lg:gap-5 transition-all sm:items-center 
        max-sm:fixed max-sm:right-0 max-sm:top-0 max-sm:bottom-0
        max-sm:w-60 max-sm:min-h-screen max-sm:h-full
        max-sm:flex-col max-sm:pl-10 max-sm:pt-20
        text-2xl shrink-0`}>

        <GiCancel
          className='text-4xl text-[var(--text-primary)] cursor-pointer sm:hidden absolute top-12 right-5'
          onClick={() => setSidebar(false)}
        />

        <a href="/#home" onClick={() => setSidebar(false)}
          className='sm:hover:border-b sm:hover:border-2 sm:hover:border-[var(--text-primary)] sm:hover:text-[var(--accent)] text-xl sm:text-base hover:scale-105 transition-all'>
          Home
        </a>

        <a href="/#about" onClick={() => setSidebar(false)}
          className='sm:hover:border-b sm:hover:border-2 sm:hover:border-[var(--text-primary)] sm:hover:text-[var(--accent)] text-xl sm:text-base hover:scale-103 transition-all'>
          About
        </a>

        <a href="/#service" onClick={() => setSidebar(false)}
          className='sm:hover:border-b sm:hover:border-2 sm:hover:border-[var(--text-primary)] sm:hover:text-[var(--accent)] text-xl sm:text-base hover:scale-103 transition-all'>
          Services
        </a>

        <a href="/#projects" onClick={() => setSidebar(false)}
          className='sm:hover:border-b sm:hover:border-2 sm:hover:border-[var(--text-primary)] sm:hover:text-[var(--accent)] text-xl sm:text-base hover:scale-103 transition-all'>
          Projects
        </a>
        <a href="/#certificates" onClick={() => setSidebar(false)}
          className='sm:hover:border-b sm:hover:border-2 sm:hover:border-[var(--text-primary)] sm:hover:text-[var(--accent)] text-xl sm:text-base hover:scale-103 transition-all'>
          Certificates
        </a>

        <a href="/#contact" onClick={() => setSidebar(false)}
          className='sm:hover:border-b sm:hover:border-2 sm:hover:border-[var(--text-primary)] sm:hover:text-[var(--accent)] text-xl sm:text-base hover:scale-103 transition-all'>
          Contact
        </a>

        {/* Theme Switcher */}
        <div className="relative">
          <button
            onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
            className="text-xl sm:text-base border border-[var(--text-primary)] px-3 py-1 rounded-md hover:bg-[var(--accent)] hover:text-white transition-all focus:outline-none"
          >
            Theme
          </button>

          {themeDropdownOpen && (
            <>
              {/* Invisible overlay to close dropdown on outside click */}
              <div className="fixed inset-0 z-30" onClick={() => setThemeDropdownOpen(false)}></div>

              <div className="absolute right-0 mt-2 w-32 bg-[var(--bg-secondary)] border border-[var(--text-secondary)] rounded-md shadow-lg z-40">
                <button
                  onClick={() => { setTheme('theme-default'); setThemeDropdownOpen(false); }}
                  className={`block w-full text-left px-4 py-2 hover:bg-[var(--accent)] ${theme === 'theme-default' ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'} hover:text-white`}
                >
                  Default
                </button>
                <button
                  onClick={() => { setTheme('theme-light'); setThemeDropdownOpen(false); }}
                  className={`block w-full text-left px-4 py-2 hover:bg-[var(--accent)] ${theme === 'theme-light' ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'} hover:text-white`}
                >
                  White
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
        </div>

      </div>

      <div>
        <IoMenuSharp className='text-3xl text-[var(--text-primary)] cursor-pointer sm:hidden' onClick={() => setSidebar(true)} />
      </div>
    </div>
  )
}

export default Navbar;
