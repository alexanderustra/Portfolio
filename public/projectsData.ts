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
    caracteristics: ProjectCharacteristic[];
}

// Define el tipo para el proyecto completo
interface Project {
    id:number
    name: string;
    img: string;
    data: ProjectDataDetail;
}
const projectImages = {
    timeManagement: {
        carousel:['/imgs/man/carousel/menu.webp','/imgs/man/carousel/routine_modal.webp'],
        home: "/imgs/man/todoHome.png",
        routine: "/imgs/man/routine.png",
        todo: "/imgs/man/ToDo.png",
        notes: "/imgs/man/notes.png",
        clock: "/imgs/man/clock.png",
    },
    restaurant: {
        carousel:['/imgs/rest/carousel/booking.webp','/imgs/rest/carousel/booking_confirmation.webp','/imgs/rest/carousel/order.webp','/imgs/rest/carousel/cart.webp','/imgs/rest/carousel/track_order.webp','/imgs/rest/carousel/track_order_2.webp'],
        home: "/imgs/rest/restaurant.webp",
        booking: "/imgs/rest/booking.webp",
        delivery: "/imgs/rest/delivery.webp",
        track: "/imgs/rest/track.webp",
    },
    montevideoDanger: {
        carousel:['/imgs/md/carousel/1.webp','/imgs/md/carousel/2.webp','/imgs/md/carousel/3.webp','/imgs/md/carousel/4.webp'],
        home: "/imgs/md/montevideoDanger.webp",
        map: "/imgs/md/map.png",
    }
};

// Array de proyectos con el tipo específico
export const projectDataEn: Project[] = [
    {
        id: 0,
        name: "Time Management App",
        img: projectImages.timeManagement.home,
        data: {
            page: "https://alexanderustra.github.io/Time-Management-App/",
            github: "https://github.com/alexanderustra/Time-Management-App",
            tecs: ["typescript", "react", "css"],
            description: "Optimize your daily routines and activities with multiple features in one place.",
            images:projectImages.timeManagement.carousel,
            caracteristics: [
                {
                    name: "Routines",
                    img: projectImages.timeManagement.routine,
                    description: "Create routines by adding activities with descriptions and deadlines. Update their status as pending, completed, or not completed."
                },
                {
                    name: "ToDo",
                    img: projectImages.timeManagement.todo,
                    description: "A classic ToDo list to organize your tasks with the option to mark them as completed. Future updates will include tracking time spent on tasks."
                },
                {
                    name: "Notes",
                    img: projectImages.timeManagement.notes,
                    description: "Create notes with options to pin, edit, or delete them effortlessly."
                },
                {
                    name: "Clock",
                    img: projectImages.timeManagement.clock,
                    description: "A visual bar showing real-time progress throughout the day."
                }
            ]
        }
    },
    {
        id: 1,
        name: "Restaurant Website",
        img: projectImages.restaurant.home,
        data: {
            page: "https://alexanderustra.github.io/Reservation-App/",
            github: "https://github.com/alexanderustra/Reservation-App",
            tecs: ["typescript", "react", "css"],
            description: "A restaurant website simulation featuring reservations, delivery, discounts, and a shopping cart.",
            images:projectImages.restaurant.carousel,
            caracteristics: [
                {
                    name: "Reservations",
                    img: projectImages.restaurant.booking,
                    description: "Allows users to simulate reservations, collecting data and respecting realistic time constraints."
                },
                {
                    name: "Delivery",
                    img: projectImages.restaurant.delivery,
                    description: "Offers a wide variety of dishes to add to the cart or buy directly."
                },
                {
                    name: "Order Tracking",
                    img: projectImages.restaurant.track,
                    description: "Generates an ID after purchase and shows real-time order progress."
                }
            ]
        }
    },
    {
        id: 2,
        name: "Montevideo Danger",
        img: projectImages.montevideoDanger.home,
        data: {
            page: "https://alexanderustra.github.io/MontevideoDanger/",
            github: "https://github.com/alexanderustra/MontevideoDanger",
            tecs: ["typescript", "react", "css", "javascript","api"],
            description: "A webpage dividing Montevideo into zones based on danger levels using official data.",
        images:projectImages.montevideoDanger.carousel,
            caracteristics: [
                {
                    name: "Map",
                    img: projectImages.montevideoDanger.map,
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
        img: projectImages.timeManagement.home,
        data: {
            page: "https://alexanderustra.github.io/Time-Management-App/",
            github: "https://github.com/alexanderustra/Time-Management-App",
            tecs: ["typescript", "react", "css"],
            description: "Optimiza tus rutinas y actividades diarias con múltiples funciones en un solo lugar.",
            images:projectImages.timeManagement.carousel,
            caracteristics: [
                {
                    name: "Rutinas",
                    img: projectImages.timeManagement.routine,
                    description: "Crea rutinas añadiendo actividades con descripción y hora límite. Actualiza su estado como pendiente, completada o no completada."
                },
                {
                    name: "ToDo",
                    img: projectImages.timeManagement.todo,
                    description: "Un clásico ToDo para organizar tus tareas con opción de marcarlas como completadas. Planeo añadir registro de tiempo dedicado."
                },
                {
                    name: "Notas",
                    img: projectImages.timeManagement.notes,
                    description: "Crea notas con opciones para fijarlas, editarlas o eliminarlas fácilmente."
                },
                {
                    name: "Reloj",
                    img: projectImages.timeManagement.clock,
                    description: "Una barra visual que muestra el progreso del día en tiempo real."
                }
            ]
        }
    },
    {
        id: 1,
        name: "Web de Restaurante",
        img: projectImages.restaurant.home,
        data: {
            page: "https://alexanderustra.github.io/Reservation-App/",
            github: "https://github.com/alexanderustra/Reservation-App",
            tecs: ["typescript", "react", "css", "javascript"],
            description: "Simula la página de un restaurante con funciones como reservas, delivery, descuentos y carrito de compras.",
            images:projectImages.restaurant.carousel,
            caracteristics: [
                {
                    name: "Reservas",
                    img: projectImages.restaurant.booking,
                    description: "Permite simular reservas, solicitando datos y respetando horarios realistas."
                },
                {
                    name: "Delivery",
                    img: projectImages.restaurant.delivery,
                    description: "Ofrece una amplia variedad de platos para agregar al carrito o comprar directamente."
                },
                {
                    name: "Seguimiento de órdenes",
                    img: projectImages.restaurant.track,
                    description: "Tras la compra, genera un ID y muestra el progreso de la orden en tiempo real."
                }
            ]
        }
    },
    {
        id: 2,
        name: "Montevideo Danger",
        img: projectImages.montevideoDanger.home,
        data: {
            page: "https://alexanderustra.github.io/MontevideoDanger/",
            github: "https://github.com/alexanderustra/MontevideoDanger",
            tecs: ["typescript", "react", "css", "javascript"],
            description: "Página que divide Montevideo en zonas de peligrosidad según datos oficiales.",
            images:projectImages.montevideoDanger.carousel,
            caracteristics: [
                {
                    name: "Mapa",
                    img: projectImages.montevideoDanger.map,
                    description: "Muestra las 24 seccionales policiales, coloreando cada zona según el número de homicidios registrados."
                }
            ]
        }
    }
];
