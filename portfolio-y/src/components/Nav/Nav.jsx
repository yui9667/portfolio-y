import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoIosSunny } from 'react-icons/io';
import { FaMoon } from 'react-icons/fa';
import { DarkModeContext } from '../Toggle/DarkModeContext';

import Logo from '../../assets/logo-jese.png';
import './Nav.css';
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  //*Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  //* Hamburger menu
  const toggleHamburger = () => {
    setIsOpen((prev) => !prev);
  };
  const handleLinkClick = () => {
    setIsOpen(false);
  };
  //* Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div>
      <nav className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
        <Link to='/portfolio-y'>
          <img src={Logo} alt='logo' className='pl-10 z-10 w-24 max-md:w-20' />
        </Link>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className='nav-item'>
            <Link
              to='/portfolio-y'
              className='nav-link'
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/about-me' className='nav-link' onClick={handleLinkClick}>
              About Me
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/project' className='nav-link' onClick={handleLinkClick}>
              Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/skills' className='nav-link' onClick={handleLinkClick}>
              Skills
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-link' onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
          <div className='pr-10'>
            <div
              onClick={toggleDarkMode}
              style={{ fontSize: '1.3rem', marginTop: '0.4rem' }}
            >
              {darkMode ? <IoIosSunny /> : <FaMoon />}
            </div>
          </div>
        </ul>
        <div
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleHamburger}
        >
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
