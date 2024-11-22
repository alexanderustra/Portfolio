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
        name: "Management App",
        img: "https://i.pinimg.com/736x/d1/f7/40/d1f740d0cab7f74d94ba5209a8ec06c6.jpg",
        data: {
            page: "https://github.com/alexanderustra/aleustra-portafolio",
            github: "https://github.com/alexanderustra/aleustra-portafolio",
            tecs: ["typescript", "react", "css", "javascript"],
            description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias",
            vid: "https://www.youtube.com/embed/xtosVrIcCyM",
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
        name: "Web Restaurant",
        img: "https://i.pinimg.com/736x/e7/53/fb/e753fb46e78f27d89c64c09b8d238fc4.jpg",
        data: {
            page: "https://github.com/alexanderustra/aleustra-portafolio",
            github: "https://github.com/alexanderustra/aleustra-portafolio",
            tecs: ["typescript", "react", "css", "javascript"],
            description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias",
            vid: "https://www.youtube.com/embed/xtosVrIcCyM",
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
        id:2,
        name: "Montevideo Danger",
        img: "https://i.pinimg.com/736x/28/24/28/282428f5e7e31aa1a75cbb137e2f5eea.jpg",
        data: {
            page: "https://github.com/alexanderustra/aleustra-portafolio",
            github: "https://github.com/alexanderustra/aleustra-portafolio",
            tecs: ["typescript", "react", "css", "javascript"],
            description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias",
            vid: "https://www.youtube.com/embed/xtosVrIcCyM",
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
