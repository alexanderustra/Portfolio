import { ApiSvg, AstroSvg, CssSvg, CvSvg, FigmaSvg, GitSvg, JavaScriptSvg, LinkedinSvg, ReactSvg, TypeScriptSvg } from "./components/Svgs"
import './aboutMe.css'
import { useState } from "react";

interface AboutMeProps {
    language: string
    onContactClick: () => void;
  }

const textEs = {
    subtitle:'Desarrollador Front End',
    description: [
        'Me considero perfeccionista y competitivo, impulsado por el constante deseo de superar desafíos y lograr la excelencia en todo lo que emprendo.',
        'He estado desarrollando aplicaciones web durante <strong> 2 años </strong>, trabajando en proyectos personales que demuestran mi capacidad para crear diseños limpios, eficientes y fáciles de usar.',
        'Egresado de <a href = "https://jovenesaprogramar.edu.uy"  target="_blank" ><strong>Jóvenes a Programar</strong></a>, modalidad desarrollo web, y ampliando mis conocimientos de forma <strong>autodidacta</strong>.',
        'Cuento con experiencia en React.js, TypeScript, JavaScript, Node.js y Astro.',
        'Actualmente, también estoy aprendiendo diseño <strong>UX</strong>.'
    ],
    button: 'Mensaje',
    phrase: '"En lo que sea, pero el mejor"',
    cv:"https://docs.google.com/viewer?url=https://raw.githubusercontent.com/alexanderustra/Portfolio/main/public/Alexander_Ustra_CV_es.pdf"
}
const textEn = {
    subtitle: 'Front End Developer',
    description: [
        'I consider myself a perfectionist and competitive, driven by a constant desire to overcome challenges and achieve excellence in everything I do.',
        'I have been developing web applications for <strong> 2 years </strong>, working on personal projects that showcase my ability to create clean, efficient, and user-friendly designs.',
        'Graduate of <a href = "https://jovenesaprogramar.edu.uy"  target="_blank" ><strong>Jóvenes a Programar</strong> </a>, specializing in web development, and continuously expanding my knowledge through <strong>self-learning</strong>.',
        'I have experience with React.js, TypeScript, JavaScript, Node.js, and Astro.',
        'Currently, I am also learning <strong>UX design</strong>.'
    ],    
    button: 'Contact Me',
    phrase: '"In whatever it is, but the Best"',
    cv:"https://docs.google.com/viewer?url=https://raw.githubusercontent.com/alexanderustra/Portfolio/main/public/Alexander_Ustra_CV_en.pdf"
} 

export const AboutMe: React.FC<AboutMeProps> = ({ onContactClick ,language}) => {
    const [showAuthor,setShowAuthor] = useState(false)

    const textToUse = language === 'Es' ? textEs : textEn

    return (
        <div id="aboutMe">
            <div id="infoContainer">
            <div>
                <h1>Alexander Ustra</h1>
                <h3>{textToUse.subtitle}</h3>

                {textToUse.description.map((item,index)=> (
                    <p 
                    key={index} 
                    dangerouslySetInnerHTML={{ __html: item }}
                    />
                ) )}

                <p>aleustrsa2004@gmail.com</p>
                <div id="infoLinks">
                
                <a 
                href={textToUse.cv} 
                target="_blank"
                rel="noopener noreferrer">
                    <CvSvg />
                </a>
                    <a href="https://www.linkedin.com/in/alexander-ustra" target="_blank"><LinkedinSvg/></a>
                    <a href="https://github.com/alexanderustra"><GitSvg/></a>
                </div>
            </div>
            <div id="tecsContainer">
                <JavaScriptSvg/>
                <TypeScriptSvg/>
                <ReactSvg/>
                <ApiSvg/>
                <AstroSvg/>
                <CssSvg/>
                <FigmaSvg/>
            </div>
            </div>
            <div id="phraseContainer">
                <button id="contact" onClick={onContactClick}>{textToUse.button}</button>
                <h4 id="phrase" onMouseOver={()=>setShowAuthor(true)} onMouseOut={()=>setShowAuthor(false)}>{textToUse.phrase}</h4>
                {showAuthor && <p id="author">Nach</p>}
            </div>
        </div>
    )
}