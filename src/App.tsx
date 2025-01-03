import { useSwipeable } from 'react-swipeable';
import { Contact } from './Contact';
import { AboutMe } from './AboutMe';
import { useEffect, useState} from 'react';
import './App.css';

import { Project, ProjectInfo } from './components/ProjectComponent';
import { Cat } from './components/Cat';
import NavigationMenu from './components/NavigationMenu';
import { Slide } from './components/SlideAnimation';

// al añadir otro proyecto se deben modificar:
// el que active view retorne a 0 en el último proyecto
// renderizar el proyecto nuevo con su id
// los condicionales de la navegación

function App() {
  const initialView = parseInt(localStorage.getItem('activeView') || '0', 10);
  const [showLoading,setShowLoading] = useState(false)
  const [activeView, setActiveView] = useState(initialView);
  const [language,setLanguage] = useState('Es')

  useEffect(()=>{
    localStorage.setItem('language',language)
  },[language])

  useEffect(() => {
    localStorage.setItem('activeView', JSON.stringify(activeView))
    //luego del último proyecto se regresa al homepage
    if(activeView > 10 ) {
      setActiveView(0)
    }
    setShowLoading(true); 
    const timeout = setTimeout(() => {
      setShowLoading(false); 
    }, 400);

    return () => clearTimeout(timeout); 
  }, [activeView]);

  const LoadingScreen = ()=>{

    return (
      <div id='loadingScreen' >
        <div id='reflex'></div>
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
          <h3 onClick={()=>setLanguage('Es')} className={language === 'Es' ? 'active' : 'languageBtn'}>Es</h3>
          <h3 onClick={()=>setLanguage('En')} className={language === 'En'? 'active' : 'languageBtn'}>En</h3>
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
        <Slide/>
      </>
    )
  }

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
      case 9:
        return<Project id={3} language={language}/> ;
      case 10:
        return<ProjectInfo id={3} language={language}/> ;
      default:
        return <Home/>;
    }
  };

  const swipeLeft = () => {
    if (activeView === 2) return
    setTimeout(() => {
      setActiveView((prev) => {
        //en la pantalla de info del proyecto solo se puede ir hacía atrás
        if ([4, 6, 8,10].includes(activeView)) return prev;
        if(prev === 3)  return 4;
          return prev + 1
      });
    }, 200);
  };
  
  const swipeRight = () => {
    //
    if ([3,5,7,9].includes(activeView)) return;
    setTimeout(() => {
      setActiveView((prev) => (prev <= 0 ? 0 : prev - 1));
    }, 200);
  };
  
  const swipeDown = () => {
    //en la pantalla de info del proyecto solo se puede ir hacía atrás
    if ([1, 2, 4, 6, 8,10].includes(activeView)) return;
    setTimeout(() => {
      setActiveView((prev) => {
        if (prev === 0) return 0;
        if (prev === 3) return 0;
        if (prev === 5 || prev === 7 || prev === 9) return prev - 2;
        return prev - 1;
      });
    }, 200);
  };
  
  const swipeUp = () => {
    //en la pantalla de info del proyecto solo se puede ir hacía atrás
    if ([1, 2, 4, 6, 8,10].includes(activeView)) return;
    setTimeout(() => {
      setActiveView((prev) => {
        if (prev === 0) return 3;
        return prev + 2;
      });
    }, 200);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => swipeLeft(),
    onSwipedRight: () => swipeRight(),
    onSwipedUp: () => swipeUp(),
    onSwipedDown: () => swipeDown(),
    preventScrollOnSwipe: true, 
    trackMouse: true, 
    trackTouch: true 
  });

  return (
    <div id={activeView === 0 || activeView === 1 || activeView === 2 ? 'container' : 'projectContainer'}  {...handlers}>
      {showLoading && <LoadingScreen/>}
       {renderView()}
      { !showLoading && <NavigationMenu
          activeView={activeView}
          setActiveView={setActiveView}
          language={language}
        />}
    </div>
  );
}

export default App