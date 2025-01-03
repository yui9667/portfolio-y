import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
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
    setIsOpen(!isOpen);
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
        <Link to='/'>
          <img src={Logo} alt='logo' className='pl-10 z-10 w-20' />
        </Link>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className='nav-item'>
            <Link to='/about-me' className='nav-link'>
              About Me
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/project' className='nav-link'>
              Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about-me' className='nav-link'>
              Skills
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-link'>
              Contact
            </Link>
          </li>
          <div className='pr-10'>
            <FontAwesomeIcon
              icon={darkMode ? faSun : faMoon}
              onClick={toggleDarkMode}
              style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}
            />
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
