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
    images:string[]
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
export const projectDataEn: Project[] = [
    {
        id: 0,
        name: "Time Management App",
        img: "/imgs/todoHome.png",
        data: {
            page: "https://alexanderustra.github.io/Time-Management-App/",
            github: "https://github.com/alexanderustra/Time-Management-App",
            tecs: ["typescript", "react", "css"],
            description: "Optimize your daily routines and activities with multiple features in one place.",
            vid: "https://www.youtube.com/embed/xtosVrIcCyM",
            images:['/imgs/booking.png','/imgs/ToDo.png','/imgs/notes.png'],
            caracteristics: [
                {
                    name: "Routines",
                    img: "/imgs/routine.png",
                    description: "Create routines by adding activities with descriptions and deadlines. Update their status as pending, completed, or not completed."
                },
                {
                    name: "ToDo",
                    img: "/imgs/ToDo.png",
                    description: "A classic ToDo list to organize your tasks with the option to mark them as completed. Future updates will include tracking time spent on tasks."
                },
                {
                    name: "Notes",
                    img: "/imgs/notes.png",
                    description: "Create notes with options to pin, edit, or delete them effortlessly."
                },
                {
                    name: "Clock",
                    img: "/imgs/clock.png",
                    description: "A visual bar showing real-time progress throughout the day."
                }
            ]
        }
    },
    {
        id: 1,
        name: "Restaurant Website",
        img: "/imgs/restaurant.png",
        data: {
            page: "https://github.com/alexanderustra/aleustra-portafolio",
            github: "https://github.com/alexanderustra/aleustra-portafolio",
            tecs: ["typescript", "react", "css"],
            description: "A restaurant website simulation featuring reservations, delivery, discounts, and a shopping cart.",
            vid: "https://www.youtube.com/embed/xtosVrIcCyM",
            images:['/imgs/booking.png','/imgs/ToDo.png','/imgs/notes.png'],
            caracteristics: [
                {
                    name: "Reservations",
                    img: "/imgs/booking.png",
                    description: "Allows users to simulate reservations, collecting data and respecting realistic time constraints."
                },
                {
                    name: "Delivery",
                    img: "/imgs/delivery.png",
                    description: "Offers a wide variety of dishes to add to the cart or buy directly."
                },
                {
                    name: "Order Tracking",
                    img: "/imgs/track.png",
                    description: "Generates an ID after purchase and shows real-time order progress."
                }
            ]
        }
    },
    {
        id: 2,
        name: "Montevideo Danger",
        img: "/imgs/montevideoDanger.png",
        data: {
            page: "https://alexanderustra.github.io/MontevideoDanger/",
            github: "https://github.com/alexanderustra/MontevideoDanger",
            tecs: ["typescript", "react", "css", "javascript","api"],
            description: "A webpage dividing Montevideo into zones based on danger levels using official data.",
            vid: "https://www.youtube.com/embed/xtosVrIcCyM",
            images:['/imgs/booking.png','/imgs/ToDo.png','/imgs/notes.png'],
            caracteristics: [
                {
                    name: "Map",
                    img: "/imgs/map.png",
                    description: "Displays the 24 police precincts, coloring each zone based on the number of registered homicides."
                }
            ]
        }
    }
];

export const projectDataEs: Project[] = [
    {
        id: 0,
        name: "App de Gestión del Tiempo",
        img: "/imgs/todoHome.png",
        data: {
            page: "https://alexanderustra.github.io/Time-Management-App/",
            github: "https://github.com/alexanderustra/Time-Management-App",
            tecs: ["typescript", "react", "css"],
            description: "Optimiza tus rutinas y actividades diarias con múltiples funciones en un solo lugar.",
            vid: "https://www.youtube.com/embed/xtosVrIcCyM",
            images:['/imgs/booking.png','/imgs/ToDo.png','/imgs/notes.png'],
            caracteristics: [
                {
                    name: "Rutinas",
                    img: "/imgs/routine.png",
                    description: "Crea rutinas añadiendo actividades con descripción y hora límite. Actualiza su estado como pendiente, completada o no completada."
                },
                {
                    name: "ToDo",
                    img: "/imgs/ToDo.png",
                    description: "Un clásico ToDo para organizar tus tareas con opción de marcarlas como completadas. Planeo añadir registro de tiempo dedicado."
                },
                {
                    name: "Notas",
                    img: "/imgs/notes.png",
                    description: "Crea notas con opciones para fijarlas, editarlas o eliminarlas fácilmente."
                },
                {
                    name: "Reloj",
                    img: "/imgs/clock.png",
                    description: "Una barra visual que muestra el progreso del día en tiempo real."
                }
            ]
        }
    },
    
    {   
        id:1,
        name: "Web de Restaurante",
        img: "/imgs/restaurant.png",
        data: {
            page: "https://github.com/alexanderustra/aleustra-portafolio",
            github: "https://github.com/alexanderustra/aleustra-portafolio",
            tecs: ["typescript", "react", "css", "javascript"],
            description: "Simula la página de un restaurante con funciones como reservas, delivery, descuentos y carrito de compras.",
            vid: "https://www.youtube.com/embed/xtosVrIcCyM",
            images:['/imgs/booking.png','/imgs/ToDo.png','/imgs/notes.png'],
            caracteristics: [
                {
                    name: "Reservas",
                    img: "/imgs/booking.png",
                    description: "Permite simular reservas, solicitando datos y respetando horarios realistas."
                },
                {
                    name: "Delivery",
                    img: "/imgs/delivery.png",
                    description: "Ofrece una amplia variedad de platos para agregar al carrito o comprar directamente."
                },
                {
                    name: "Seguimiento de órdenes",
                    img: "/imgs/track.png",
                    description: "Tras la compra, genera un ID y muestra el progreso de la orden en tiempo real."
                }
            ]
        }        
    },
    {
        id: 2,
        name: "Montevideo Danger",
        img: "/imgs/montevideoDanger.png",
        data: {
            page: "https://alexanderustra.github.io/MontevideoDanger/",
            github: "https://github.com/alexanderustra/MontevideoDanger",
            tecs: ["typescript", "react", "css", "javascript"],
            description: "Página que divide Montevideo en zonas de peligrosidad según datos oficiales.",
            vid: "https://www.youtube.com/embed/xtosVrIcCyM",
            images:['/imgs/booking.png','/imgs/ToDo.png','/imgs/notes.png'],
            caracteristics: [
                {
                    name: "Mapa",
                    img: "/imgs/map.png",
                    description: "Muestra las 24 seccionales policiales, coloreando cada zona según el número de homicidios registrados."
                }
            ]
        }
    }
    
];
