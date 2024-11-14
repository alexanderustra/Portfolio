import SwipeNavigator from "./components/navegationSwipe";
import { Project } from "./components/ProjectComponent";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { projectData } from "../public/projectsData";

export const MyWork = () => {
    const local = JSON.parse(localStorage.getItem('id') || '0'); 
    const maxId = projectData.length - 1;  
    const [id, setId] = useState(Math.min(Math.max(local, 0), maxId));
    const navigate = useNavigate();  
    console.log(id)

    // Verificar si el id es válido
    useEffect(() => {
        if (id < 0 || id > maxId) {
            navigate("/");  
        }
    }, [id, maxId, navigate]);

    const handleSwipeUp = () => {
        setId(prevId => prevId + 1);  
    };

    const handleSwipeDown = () => {
        setId(prevId => prevId - 1);
    };

    return (
        <div id="container">
            <Project id={id} /> 
            <SwipeNavigator
                onSwipeUp={handleSwipeUp} 
                onSwipeDown={handleSwipeDown}  
                onSwipeLeft={()=>navigate(`/${id}`)}
            />
        </div>
    );
};