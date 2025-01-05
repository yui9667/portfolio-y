//import AboutMe from '../AboutMe/AboutMe';

import Task from '../Task/Task';
import SvgFolder from '../SvgFolder/Svg';
import Contact from '../Contact/Contact';

import { ProjectText2 } from '../ProjectText/ProjectText';

const Dashboard = () => {
  return (
    <div>
      <SvgFolder />
      <div className='mb-40 mt-30'>
        <ProjectText2 />
      </div>
      <Task />
      <Contact />
    </div>
  );
};
export default Dashboard;
