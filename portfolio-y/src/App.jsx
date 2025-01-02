import './index.css';
import Dashboard from './components/dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailAboutMe from './components/DetailAboutMe/DetailAboutMe';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/about-me' element={<DetailAboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
