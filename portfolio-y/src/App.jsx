import './index.css';
import Dashboard from './components/dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailAboutMe from './components/DetailAboutMe/DetailAboutMe';
import Contact from './components/Contact/Contact';
import DetailProject from './components/DetailProject/DetailProject';
import { DarkModeProvider } from './components/Toggle/DarkModeContext';
import Nav from './components/Nav/Nav';
import ScrollTop from './components/ScrollTop/ScrollTop';
import Skills from './components/Skills/Skills';
function App() {
  return (
    <DarkModeProvider>
      <Router>
        <ScrollTop />
        <Nav />
        <Routes>
          <Route path='/portfolio-y' element={<Dashboard />} />
          <Route path='/about-me' element={<DetailAboutMe />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/project' element={<DetailProject />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
