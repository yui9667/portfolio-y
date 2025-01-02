import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };
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
  });
  return (
    <div>
      <nav className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
        {/* <img
          src='../src/assets/logo-yui.png'
          alt='logo'
          className='pl-10 z-10 w-28'
        /> */}
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
              icon={faSun}
              style={{ color: '#e6620a', margin: '10px', fontSize: '20px' }}
            />
            <FontAwesomeIcon
              icon={faMoon}
              style={{ color: '#FFD43B', fontSize: '20px' }}
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
