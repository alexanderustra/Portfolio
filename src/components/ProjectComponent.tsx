import {projectData} from '../../public/projectsData'
import { useEffect } from "react";
import styles from './project.module.css'
import { YouTubeEmbed } from './VideoProd';
interface ProjectProps {
    id: number;
}

const Project:React.FC<ProjectProps> = ({ id }) =>{

    const info = projectData.find(data => data.id === id)

    if (!info) {
        return <div>Project not found</div>;
    }

    return (
        <div className={styles.projectTitleContainer} 
        style={{backgroundImage: `url(${info.img})`,
        backgroundSize: 'cover',  
        backgroundPosition: 'center',}}>
                <h2>{info?.name}</h2>
        </div>
    )
}
const ProjectInfo:React.FC<ProjectProps> = ({ id }) =>{

    useEffect(()=>{
        localStorage.setItem('id',JSON.stringify(id))
    },[])
    
    const info = projectData.find(data => data.id === id)

    if (!info) {
        return <div>Project not found</div>;
    }
    return (
        <div className={styles.projectInfo}>
                <h1>{info.name}</h1>
                <p>{info.data.description}</p>
                <div>
                    <a href={info.data.page} >Page</a>
                    <a  href={info.data.github}>Github</a>
                </div>
                <YouTubeEmbed route = {info.data.vid} />
                <ul>
                {info.data.caracteristics.map((caracteristic,index) => (
                    <li key={index}>
                        <img className={styles.caracteristicImg} src={caracteristic.img} alt={caracteristic.name} />
                        <div>
                            <h4>{caracteristic.name}</h4>
                            <p>{caracteristic.description}</p>
                        </div>
                    </li>
                ) )}
                </ul>
            </div>
    )
}
export {Project, ProjectInfo}