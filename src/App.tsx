import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { Contact } from './Contact';
import { AboutMe } from './AboutMe';
import { MyWork } from './MyWork';

import './App.css';
import SwipeNavigator from './components/navegationSwipe';
import { projectData } from '../public/projectsData';
import { ProjectInfo } from './components/ProjectComponent';

function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        {projectData.map((project) => (
          <Route
            key={project.id}
            path={`/${project.id}`}
            element={<ProjectInfo id={project.id} />}
          />
        ))}
        <Route path="/myWork" element={<MyWork />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutMe" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname !== "/") {
    return null;
  }

  return (
    <div id="container">
      <div>
        <h3>En</h3>
        <h3>Es</h3>
      </div>
      <button className="homeBtn" onClick={() => navigate('/myWork')}>My Work</button>
      <button className="homeBtn" onClick={() => navigate('/aboutMe')}>About Me</button>
      <button className="homeBtn" onClick={() => navigate('/contact')}>Contact</button>
      <SwipeNavigator
        onSwipeLeft={() => navigate('/aboutMe')}
        onSwipeUp={() => navigate('/myWork')}
      />
    </div>
  );
};

export default App;