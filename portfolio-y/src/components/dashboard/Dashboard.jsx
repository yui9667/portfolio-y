//import AboutMe from '../AboutMe/AboutMe';
import Task from '../Task/Task';
import SvgFolder from '../SvgFolder/Svg';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import { ProjectText2 } from '../ProjectText/ProjectText';
import Nav from '../Nav/Nav';
const Dashboard = () => {
  return (
    <>
      <Nav />
      <SvgFolder />
      <div className='mb-40'>
        <ProjectText2 />
      </div>
      <Task />
      <Contact />
      <Footer />
    </>
  );
};
export default Dashboard;
