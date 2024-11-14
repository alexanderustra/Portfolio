import SwipeNavigator from "./navegationSwipe"
import {projectData} from '../../public/projectsData'
import { useNavigate } from "react-router";
import { useEffect } from "react";
interface ProjectProps {
    id: number;
}

const Project:React.FC<ProjectProps> = ({ id }) =>{

    const info = projectData.find(data => data.id === id)

    if (!info) {
        return <div>Project not found</div>;
    }

    return (
        <div id="projectContainer">
            <div 
                style={{backgroundImage: `url(${info.img})`,
                    backgroundSize: 'cover',  
                    backgroundPosition: 'center',}}
                >
                <h2>{info?.name}</h2>
                
            </div>
        </div>
    )
}
const ProjectInfo:React.FC<ProjectProps> = ({ id }) =>{

    useEffect(()=>{
        localStorage.setItem('id',JSON.stringify(id))
    },[])
    
    const navigate = useNavigate()
    const info = projectData.find(data => data.id === id)

    if (!info) {
        return <div>Project not found</div>;
    }
    return (
        <div id="container">
                <h1>{info.name}</h1>
                <p>{info.data.description}</p>
                <div>
                    <button onClick={()=>navigate(`${info.data.page}`)}>Page</button>
                    <button onClick={()=>navigate(`${info.data.github}`)}>Github</button>
                </div>
                <ul>
                {info.data.caracteristics.map((caracteristic,index) => (
                    <li key={index}>
                        <img src={caracteristic.img} alt={caracteristic.name} />
                        <div>
                            <h4>{caracteristic.name}</h4>
                            <p>{caracteristic.description}</p>
                        </div>
                    </li>
                ) )}
                </ul>
                <SwipeNavigator onSwipeRight={()=>navigate('/myWork')} />
            </div>
    )
}
export {Project, ProjectInfo}