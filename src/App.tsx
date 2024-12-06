import { useSwipeable } from 'react-swipeable';
import { Contact } from './Contact';
import { AboutMe } from './AboutMe';
import { useEffect, useState} from 'react';
import './App.css';
import './desktop.css'

import { Project, ProjectInfo } from './components/ProjectComponent';
import { Cat } from './components/Cat';

function App() {
  
  const [showLoading,setShowLoading] = useState(false)
  const [activeView, setActiveView] = useState(0);
  const [language,setLanguage] = useState('Es')
  

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
    if (activeView === 4 || activeView === 6 || activeView === 8) setText({ top: '', right: '', bottom: '', left: '' });
    if (activeView === 7) setText({ top: 'Previus', right: 'Project Info', bottom: 'Home', left: '' });
  }, [activeView]);

    return (
      <div id='navigationMenu'>
        <h4 id='top'>{text.top}</h4>
        <h4 id='right'>{text.right}</h4>
        <div id='circle' style={activeView === 4 || activeView === 6 || activeView === 8 ? {display:'none'} : {display:'flex'}}></div>
        <h4 id='bottom'>{text.bottom}</h4>
        <h4 id='left'>{text.left}</h4>
      </div>
    )
  }

  const Home = ()=>{
    const textEs = {
      work:'Mis Trabajos',
      about: 'Sobre Mi',
      contact: 'Contacto'
    }
    const textEn = {
      work:'My Work',
      about: 'About Me',
      contact: 'Contact'
    }
    const textToUse = language === 'Es' ? textEs : textEn
    return (
      <>
        <div id='languageContainer'>
          <h3 onClick={()=>setLanguage('Es')} className={language === 'Es' ? 'active' : ''}>Es</h3>
          <h3 onClick={()=>setLanguage('En')} className={language === 'En'? 'active' : ''}>En</h3>
        </div>
        <div id='homeContainer'>
          <button className="homeBtn" onClick={() => {
            setTimeout(() => {
              setActiveView(3);
            }, 200);
            }}>{textToUse.work}</button>
          <button className="homeBtn" onClick={() => {
            setTimeout(() => {
              setActiveView(1);
            }, 200);
            }}>{textToUse.about}</button>
          <button className="homeBtn" onClick={() => {
            setTimeout(() => {
              setActiveView(2);
            }, 200);
            }}>{textToUse.contact}</button>
        </div>
          <Cat />
      </>
    )
  }

  useEffect(()=>{
    localStorage.setItem('language',language)
  },[language])

  const renderView = () => {
    switch (activeView) {
      case 0:
        return <Home/> ;
      case 1:
        return <AboutMe onContactClick = {()=>setActiveView(2)} language={language}/>;
      case 2:
        return <Contact  language={language} />;
      case 3:
        return <Project id={0} language={language} />;
      case 4:
        return<ProjectInfo id={0} language={language}/> ;
      case 5 : 
        return <Project id={1} language={language} />;
      case 6:
        return<ProjectInfo id={1} language={language}/> ;
      case 7:
        return<Project id={2} language={language}/> ;
      case 8:
        return<ProjectInfo id={2} language={language}/> ;
      default:
        return <Home/>;
    }
  };

  const swipeLeft = () => {
    if (activeView === 2) return
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
    if (activeView === 1 ||activeView === 2 || activeView === 4 || activeView === 6 || activeView === 8) return; 
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
    if (activeView === 1 ||activeView === 2 || activeView === 4 || activeView === 6 || activeView === 8) return; 
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
    <div id={activeView === 0 || activeView === 1 || activeView === 2 ? 'container' : 'projectContainer'}  {...handlers}>
      {showLoading && <LoadingScreen/>}
       {renderView()}
      { !showLoading && <NavigationMenu/>}
    </div>
  );
}


export default App