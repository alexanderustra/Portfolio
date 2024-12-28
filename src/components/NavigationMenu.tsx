import { useState, useEffect } from 'react';
import styles from './navigationMenu.module.css';

interface NavigationProps {
  activeView: number;
  setActiveView: (value: number | any) => void;
  language: string;
}

interface TextMapping {
  top: string;
  right: string;
  bottom: string;
  left: string;
}

const NavigationMenu = ({ activeView, setActiveView, language }: NavigationProps) => {
  const text = {
    Es: {
      aboutMe: 'Sobre Mi',
      myWork: 'Proyectos',
      contact: 'Contacto',
      home: 'Inicio',
      previus: 'Anterior',
      projectInfo: 'Descripción',
      next: 'Siguiente',
      back: 'Atrás',
    },
    En: {
      aboutMe: 'About Me',
      myWork: 'My Work',
      contact: 'Contact',
      home: 'Home',
      previus: 'Previous',
      projectInfo: 'Project Info',
      next: 'Next',
      back: 'Back',
    },
  };

  const textToUse = language === 'Es' ? text.Es : text.En;

  const [textState, setTextState] = useState<TextMapping>({
    top: '',
    right: '',
    bottom: '',
    left: '',
  });

  const views: Map<number, TextMapping> = new Map([
    [0, { right: textToUse.aboutMe, bottom: textToUse.myWork, top: '', left: '' }],
    [1, { right: textToUse.contact, left: textToUse.home, top: '', bottom: '' }],
    [2, { left: textToUse.aboutMe, top: '', right: '', bottom: '' }],
    [3, { top: textToUse.home, right: textToUse.projectInfo, bottom: textToUse.next, left: '' }],
    [4, { left: textToUse.back, top: '', right: '', bottom: '' }],
    [5, { top: textToUse.previus, right: textToUse.projectInfo, bottom: textToUse.next, left: '' }],
    [6, { left: textToUse.back, top: '', right: '', bottom: '' }],
    [7, { top: textToUse.previus, right: textToUse.projectInfo, bottom: textToUse.home, left: '' }],
    [8, { left: textToUse.back, top: '', right: '', bottom: '' }],
  ]);

  useEffect(() => {
    const newText = views.get(activeView) || { top: '', right: '', bottom: '', left: '' };
    setTextState(prevText => (JSON.stringify(prevText) !== JSON.stringify(newText) ? newText : prevText));
  }, [activeView, language]);

  const swipeUp = () => setActiveView((prev:any) => (prev === 0 ? 3 : prev + 2));
  const swipeDown = () => setActiveView((prev:any) => (prev === 0 ? 0 : prev - 2));
  const swipeLeft = () => setActiveView((prev:any) => prev + 1);
  const swipeRight = () => setActiveView((prev:any) => (prev <= 0 ? 0 : prev - 1));

  return (
    <div id="navigationMenu" className={activeView === 0 ? styles.homeNavigationMenu : styles.navigationMenu}>
      <h4 className={styles.top} onClick={swipeDown}>{textState.top}</h4>
      <h4 className={styles.right} onClick={swipeLeft}>{textState.right}</h4>
      <div className={styles.circle} onClick={() => setActiveView(0)}></div>
      <h4 className={styles.bottom} onClick={swipeUp}>{textState.bottom}</h4>
      <h4 className={styles.left} onClick={swipeRight}>{textState.left}</h4>
    </div>
  );
};

export default NavigationMenu;