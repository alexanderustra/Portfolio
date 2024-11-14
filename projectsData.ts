// Define el tipo para una característica individual del proyecto
interface ProjectCharacteristic {
    name: string;
    img: string;
    description: string;
}

// Define el tipo para los datos detallados de un proyecto
interface ProjectDataDetail {
    page: string;
    github: string;
    tecs: string[];
    description: string;
    vid: string;
    caracteristics: ProjectCharacteristic[];
}

// Define el tipo para el proyecto completo
interface Project {
    id:number
    name: string;
    img: string;
    data: ProjectDataDetail;
}

// Array de proyectos con el tipo específico
export const projectData: Project[] = [
    {       
        id:0,
        name: "project 1",
        img: "https://i.pinimg.com/736x/a4/e4/10/a4e4102115acdb159b2b1952eeb6e5a6.jpg",
        data: {
            page: "https://github.com/alexanderustra/aleustra-portafolio",
            github: "https://github.com/alexanderustra/aleustra-portafolio",
            tecs: ["typescript", "react", "css", "javascript"],
            description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias",
            vid: "https://www.youtube.com/watch?v=H0pCy9G868Y",
            caracteristics: [
                {
                    name: "name",
                    img: "https://i.pinimg.com/736x/21/db/eb/21dbeb1a9bd48ebc005c06ae85eec23f.jpg",
                    description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias"
                },
                {
                    name: "name",
                    img: "https://i.pinimg.com/736x/21/db/eb/21dbeb1a9bd48ebc005c06ae85eec23f.jpg",
                    description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias"
                }
            ]
        }
    },
    {   
        id:1,
        name: "project 2",
        img: "https://i.pinimg.com/736x/a4/e4/10/a4e4102115acdb159b2b1952eeb6e5a6.jpg",
        data: {
            page: "https://github.com/alexanderustra/aleustra-portafolio",
            github: "https://github.com/alexanderustra/aleustra-portafolio",
            tecs: ["typescript", "react", "css", "javascript"],
            description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias",
            vid: "https://www.youtube.com/watch?v=H0pCy9G868Y",
            caracteristics: [
                {
                    name: "name",
                    img: "https://i.pinimg.com/736x/21/db/eb/21dbeb1a9bd48ebc005c06ae85eec23f.jpg",
                    description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias"
                },
                {
                    name: "name",
                    img: "https://i.pinimg.com/736x/21/db/eb/21dbeb1a9bd48ebc005c06ae85eec23f.jpg",
                    description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias"
                }
            ]
        }
    }
];
