import { useEffect, useState, createContext } from 'react';
import PropTypes from 'prop-types';
//*Create Dark Mode State in globally in all components
const DarkModeContext = createContext();
console.log(DarkModeContext);
const DarkModeProvider = ({ children }) => {
  //* Use lazy initialization to get the local storage
  const [darkMode, setDarkMode] = useState(() => {
    //*Local Storage persists the dark mode
    const saveMode = localStorage.getItem('darkMode');
    return saveMode ? JSON.parse(saveMode) : false;
  });
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
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
