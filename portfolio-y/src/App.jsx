import './index.css';
import Dashboard from './components/dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailAboutMe from './components/DetailAboutMe/DetailAboutMe';
import Contact from './components/Contact/Contact';
import DetailProject from './components/DetailProject/DetailProject';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/about-me' element={<DetailAboutMe />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/project' element={<DetailProject />} />
      </Routes>
    </Router>
  );
}

export default App;
