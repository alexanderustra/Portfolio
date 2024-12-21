import {projectDataEn} from '../../public/projectsData'
import {projectDataEs} from '../../public/projectsData'
import ImageCarousel from './Carousel';
import styles from './project.module.css'
//import { YouTubeEmbed } from './VideoProd';
import { ApiSvg, CssSvg, FigmaSvg, JavaScriptSvg, ReactSvg, TypeScriptSvg } from './Svgs';
interface ProjectProps {
    id: number;
    language:string
}

const getProjectData = (id: number) => {
    const language = localStorage.getItem('language') || 'Es';
    const projectData = language === 'En' ? projectDataEn : projectDataEs;
    return projectData.find(data => data.id === id);
};
const Project:React.FC<ProjectProps> = ({ id }) =>{

    const info = getProjectData(id);

    if (!info) {
        return <div>Project not found</div>;
    }

    return (
        <div className={styles.projectTitleContainer} >
                <h2>{info?.name}</h2>
                <img src={`${info.img}`} alt="" />
        </div>
    )
}
const ProjectInfo:React.FC<ProjectProps> = ({ id }) =>{
    //const [openImage,setOpenImage] = useState(false)
   // const [imageUrl,setImageUrl] = useState('')

    const componentMap: Record<string, React.FC> = {
        react: ReactSvg,
        typescript: TypeScriptSvg,
        css: CssSvg,
        javascript: JavaScriptSvg,
        figma: FigmaSvg,
        api:ApiSvg
    };

    
    const info = getProjectData(id);

    if (!info) {
        return <div>Project not found</div>;
    }

    /*
    const handleOpenImage = (url:any)=>{
        setImageUrl(url)
        console.log(imageUrl)
        setOpenImage(true)
    }
    const Image = (img:any)=>{
        console.log(img)
        return (
            <div className={styles.modal}>
                <button onClick={()=>setOpenImage(false)}><CrossSvg/></button>
                <img src={img.img} alt="" />
            </div>
        ) 
    }
    */
    return (
        <div className={styles.projectInfo}>
                <div>
                <div className={styles.infoContainer}>
                <div>
                    <h1>{info.name}</h1>
                    <p>{info.data.description}</p>
                </div>
                <div className={styles.tecContainer}>
                    {info.data.tecs.map((tech, index) => {
                        const TecComponent = componentMap[tech as keyof typeof componentMap];
                        return TecComponent ? <TecComponent key={index} /> : null;
                    })}
                </div>
                </div>
                <div className={styles.linkContainer}>
                    <a href={info.data.page}  target='_blank'>{localStorage.getItem('language') === 'Es' ? 'Página' : 'Page'}</a>
                    <a  href={info.data.github} target='_blank'>Github</a>
                </div>
                <ImageCarousel interval={2000} images={info.data.images}/> 
                </div>
                <ul>
                {info.data.caracteristics.map((caracteristic,index) => (
                    <li key={index}>
                       
                        <div>
                            <h4 className={styles.descriptionTitle}>{caracteristic.name}</h4>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: caracteristic.description
                                }}
                            ></p>
                        </div>
                        <img className={styles.caracteristicImg} src={caracteristic.img} alt={caracteristic.name} />
                    </li>
                ) )}
                </ul>
            </div>
    )
}
export {Project, ProjectInfo}