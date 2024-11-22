import { useSwipeable } from 'react-swipeable';
import { Contact } from './Contact';
import { AboutMe } from './AboutMe';
import { useEffect, useState} from 'react';
import './App.css';

import { Project, ProjectInfo } from './components/ProjectComponent';

function App() {
  
  const [showLoading,setShowLoading] = useState(false)
  const [activeView, setActiveView] = useState(0);
  

  const LoadingScreen = ()=>{

    return (
      <div id='loadingScreen' >
        <div id='reflex'></div>
      </div>
    )
  }

const NavigationMenu = ()=>{

  const [text,setText] = useState({
    top:'',
    right:'',
    bottom:'',
    left:'',

  })
  useEffect(() => {
    if (activeView === 0) setText({ top: '', right: 'About Me', bottom: 'My Work', left: '' });
    if (activeView === 1) setText({ top: '', right: 'Contact', bottom: '', left: 'Home' });
    if (activeView === 2) setText({ top: '', right: '', bottom: '', left: 'About Me' });
    if (activeView === 3) setText({ top: 'Home', right: 'Project Info', bottom: 'Next', left: '' });
    if (activeView > 3) setText({ top: 'Previus', right: 'Project Info', bottom: 'Next', left: '' });
    if (activeView === 4 || activeView === 6 || activeView === 8) setText({ top: '', right: '', bottom: '', left: 'Back' });
    if (activeView === 7) setText({ top: 'Previus', right: 'Project Info', bottom: 'Home', left: '' });
  }, [activeView]);

    return (
      <div id='navigationMenu'>
        <h4 id='top'>{text.top}</h4>
        <h4 id='right'>{text.right}</h4>
        <div id='circle'></div>
        <h4 id='bottom'>{text.bottom}</h4>
        <h4 id='left'>{text.left}</h4>
      </div>
    )
  }

  const Home = ()=>{
    return (
      <>
        <div>
            <h3>En</h3>
            <h3>Es</h3>
        </div>
        <button className="homeBtn" onClick={() => {
          setTimeout(() => {
            setActiveView(3);
          }, 200);
          }}>My Work</button>
        <button className="homeBtn" onClick={() => {
          setTimeout(() => {
            setActiveView(1);
          }, 200);
          }}>About Me</button>
        <button className="homeBtn" onClick={() => {
          setTimeout(() => {
            setActiveView(2);
          }, 200);
          }}>Contact</button>
      </>
    )
  }

  const renderView = () => {
    switch (activeView) {
      case 0:
        return <Home/> ;
      case 1:
        return <AboutMe/>;
      case 2:
        return <Contact />;
      case 3:
        return <Project id={0} />;
      case 4:
        return<ProjectInfo id={0}/> ;
      case 5 : 
        return <Project id={1} />;
      case 6:
        return<ProjectInfo id={1}/> ;
      case 7:
        return<Project id={2}/> ;
      case 8:
        return<ProjectInfo id={2}/> ;
      default:
        return <Home/>;
    }
  };

  const swipeLeft = () => {
    setTimeout(() => {
      setActiveView((prev) => {
        if (activeView === 4 || activeView === 6 || activeView === 8) return prev
        if(prev === 3)  return 4;
          return prev + 1
      });
    }, 200);
  };
  
  const swipeRight = () => {
    if (activeView === 3 || activeView === 5 || activeView === 7) return
    setTimeout(() => {
      setActiveView((prev) => (prev <= 0 ? 0 : prev - 1));
    }, 200);
  };
  
  const swipeDown = () => {
    if (activeView === 4 || activeView === 6 || activeView === 8) return; // Bloquea swipeDown
    setTimeout(() => {
      setActiveView((prev) => {
        if (prev === 0) return 0;
        if (prev === 3) return 0;
        if (prev === 5 || prev === 7) return prev - 2;
        return prev - 1;
      });
    }, 200);
  };
  
  const swipeUp = () => {
    if (activeView === 4 || activeView === 6 || activeView === 8) return; // Bloquea swipeUp
    setTimeout(() => {
      setActiveView((prev) => {
        if (prev === 0) return 3;
        return prev + 2;
      });
    }, 200);
  };
  
  
  useEffect(() => {
    if(activeView > 8 ) {
      setActiveView(0)
    }
    setShowLoading(true); 
    const timeout = setTimeout(() => {
      setShowLoading(false); 
    }, 400);

    return () => clearTimeout(timeout); 
  }, [activeView]);

  if (location.pathname !== "/") {
    return null;
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => swipeLeft(),
    onSwipedRight: () => swipeRight(),
    onSwipedUp: () => swipeUp(),
    onSwipedDown: () => swipeDown(),
    preventScrollOnSwipe: true, 
  });

  return (
    <div id="container"  {...handlers}>
      {showLoading && <LoadingScreen/>}
       {renderView()}
      { !showLoading && <NavigationMenu/>}
    </div>
  );
}


export default App