import { useEffect, useState, createContext } from 'react';
import PropTypes from 'prop-types';
//*Create Dark Mode State in globally in all components
const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { DarkModeContext, DarkModeProvider };
