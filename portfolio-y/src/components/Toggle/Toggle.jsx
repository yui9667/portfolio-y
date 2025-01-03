import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { DarkModeContext } from './DarkModeContext';
const Toggle = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className=''>
      <FontAwesomeIcon
        icon={darkMode ? faSun : faMoon}
        onClick={toggleDarkMode}
        size='2x'
      />
    </div>
  );
};

export default Toggle;
