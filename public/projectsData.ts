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
const projectDetails= {
    timeManagement: {
        carousel:['/imgs/man/carousel/menu.webp','/imgs/man/carousel/routine_modal.webp'],
        home: "/imgs/man/todoHome.png",
        routine: "/imgs/man/routine.png",
        todo: "/imgs/man/ToDo.png",
        notes: "/imgs/man/notes.png",
        clock: "/imgs/man/clock.png",
        tecs: ["typescript", "react", "css"],
    },
    restaurant: {
        carousel:['/imgs/rest/carousel/booking.webp','/imgs/rest/carousel/booking_confirmation.webp','/imgs/rest/carousel/order.webp','/imgs/rest/carousel/cart.webp','/imgs/rest/carousel/track_order.webp','/imgs/rest/carousel/track_order_2.webp'],
        home: "/imgs/rest/restaurant.webp",
        booking: "/imgs/rest/booking.webp",
        delivery: "/imgs/rest/delivery.webp",
        track: "/imgs/rest/track.webp",
        tecs: ["typescript", "react", "css"],
    },
    montevideoDanger: {
        carousel:['/imgs/md/carousel/1.webp','/imgs/md/carousel/2.webp','/imgs/md/carousel/3.webp','/imgs/md/carousel/4.webp'],
        home: "/imgs/md/montevideoDanger.webp",
        map: "/imgs/md/map.png",
        input:'/imgs/md/input.webp',
        tecs: ["typescript", "react", "css", "javascript","node"],
    },
    eComerce: {
        carousel:['/imgs/jap/home.webp','/imgs/jap/categories.webp','/imgs/jap/reviews.webp','/imgs/jap/product.webp'],
        home: "/imgs/jap/home.webp",
        cart: "/imgs/jap/cart.webp",
        products: "/imgs/jap/products.webp",
        profile: "/imgs/jap/profile.webp",
        tecs: ["javascript","node","css"],
    }
};

// Array de proyectos con el tipo específico
export const projectDataEn: Project[] = [
    {
        "id": 0,
        "name": "Time Management App",
        "img": projectDetails.timeManagement.home,
        "data": {
            "page": "https://alexanderustra.github.io/Time-Management-App/",
            "github": "https://github.com/alexanderustra/Time-Management-App",
            "tecs": projectDetails.timeManagement.tecs,
            "description": "Optimize time management with features such as creating routines, organizing tasks, tracking notes, and a visual clock to monitor daily progress.",
            "images": projectDetails.timeManagement.carousel,
            "caracteristics": [
                {
                    "name": "Routines",
                    "img": projectDetails.timeManagement.routine,
                    "description": "Create routines by adding activities with descriptions and deadlines. Each activity’s status can be updated as pending, completed, or not completed. If the deadline is exceeded and the activity is not marked as completed, it is marked as failed until the next day."
                },
                {
                    "name": "ToDo",
                    "img": projectDetails.timeManagement.todo,
                    "description": "A classic ToDo to organize your tasks with the option to mark them as completed and delete them. (Planned feature: time tracking for each task)."
                },
                {
                    "name": "Notes",
                    "img": projectDetails.timeManagement.notes,
                    "description": "Create notes with options to pin, edit, or delete them easily."
                },
                {
                    "name": "Clock",
                    "img": projectDetails.timeManagement.clock,
                    "description": "A visual bar made with CSS that shows the progress of the day in real-time."
                }
            ]
        }
    },
    {
        "id": 1,
        "name": "Restaurant Website",
        "img": projectDetails.restaurant.home,
        "data": {
            "page": "https://alexanderustra.github.io/Reservation-App/",
            "github": "https://github.com/alexanderustra/Reservation-App",
            "tecs": projectDetails.restaurant.tecs,
            "description": "Simulates a restaurant website with features like reservations, delivery, discounts, and a shopping cart.",
            "images": projectDetails.restaurant.carousel,
            "caracteristics": [
                {
                    "name": "Reservations",
                    "img": projectDetails.restaurant.booking,
                    "description": "Allows users to simulate a reservation. It requests key data and validates realistic times and dates."
                },
                {
                    "name": "Delivery",
                    "img": projectDetails.restaurant.delivery,
                    "description": "Allows users to choose from a variety of dishes organized by categories. Users can add them to the cart, customize ingredients with real-time price adjustments, and benefit from automatically applied discounts."
                },
                {
                    "name": "Order Tracking",
                    "img": projectDetails.restaurant.track,
                    "description": "Records the time when an order is placed and simulates the entire process: from order placement, preparation, to the delivery completion, providing real-time updates to the user."
                }
            ]
        }
    },
    {
        id: 2,
        name: "Montevideo Danger",
        img: projectDetails.montevideoDanger.home,
        data: {
            page: "https://alexanderustra.github.io/MontevideoDanger/",
            github: "https://github.com/alexanderustra/MontevideoDanger",
            tecs: projectDetails.montevideoDanger.tecs,
            description: "A webpage dividing Montevideo into zones based on danger levels using official data.",
        images:projectDetails.montevideoDanger.carousel,
            caracteristics: [
                {
                    name: "Map",
                    img: projectDetails.montevideoDanger.map,
                    description: "Displays the 24 police precincts, coloring each zone based on the number of registered homicides."
                },
                {
                    name: "Search by year",
                    img: projectDetails.montevideoDanger.input,
                    description: "The map page allows users to explore recorded data by selecting a specific year between 2013 and 2023. The map updates in real-time based on the selection."
                }
            ]
        }
    },
    {
        id: 3,
        name: "JaP eCommerce",
        img: projectDetails.eComerce.home,
        data: {
            page: "https://alexanderustra.github.io/JaP-eComerce/",
            github: "https://github.com/alexanderustra/JaP-eComerce",
            tecs: projectDetails.eComerce.tecs,
            description: "Group project for Jóvenes a Programar, an eCommerce platform developed primarily with JavaScript and Node.js, using APIs to load data.",
            images: projectDetails.eComerce.carousel,
            caracteristics: [
                {
                    name: "Profile",
                    img: projectDetails.eComerce.profile,
                    description: "Allows users to register, log in, and manage their personal information. Each profile has a unique ID, with options to update data and change the profile picture. Additionally, it is integrated with a personalized shopping cart, ensuring that each action is linked to the authenticated user."
                },
                {
                    name: "Products",
                    img: projectDetails.eComerce.products,
                    description: "Uses an API to dynamically load items, organizing them into various categories. Each product includes detailed information such as description, images, customer reviews, and specific data."
                },
                {
                    name: "Cart",
                    img: projectDetails.eComerce.cart,
                    description: "Allows users to save items, adjust quantities, and manage products, including the option to remove them. Additionally, it calculates and displays the total price in real-time."
                },
            ]
        }
    }    
];

export const projectDataEs: Project[] = [
    {
        id: 0,
        name: "App de Gestión del Tiempo",
        img: projectDetails.timeManagement.home,
        data: {
            page: "https://alexanderustra.github.io/Time-Management-App/",
            github: "https://github.com/alexanderustra/Time-Management-App",
            tecs: projectDetails.timeManagement.tecs,
            description: "Optimiza la gestión del tiempo con funciones como la creación de rutinas, organización de tareas, seguimiento de notas y un reloj visual para monitorear el progreso diario.",
            images:projectDetails.timeManagement.carousel,
            caracteristics: [
                {
                    name: "Rutinas",
                    img: projectDetails.timeManagement.routine,
                    description: "Crea rutinas añadiendo actividades con descripciones y hora límite. El estado de cada actividad puede actualizarse como pendiente, completada o no completada. Si se supera la hora límite y la actividad no se marcó como completada, se marca como fallida hasta el día siguiente."
                },
                {
                    name: "ToDo",
                    img: projectDetails.timeManagement.todo,
                    description: "Un clásico ToDo para organizar tus tareas con opción de marcarlas como completadas y eliminarlas. Planeo añadir registro de tiempo dedicado."
                },
                {
                    name: "Notas",
                    img: projectDetails.timeManagement.notes,
                    description: "Crea notas con opciones para fijarlas, editarlas o eliminarlas fácilmente."
                },
                {
                    name: "Reloj",
                    img: projectDetails.timeManagement.clock,
                    description: "Una barra visual hecha con css que muestra el progreso del día en tiempo real."
                }
            ]
        }
    },
    {
        id: 1,
        name: "Web de Restaurante",
        img: projectDetails.restaurant.home,
        data: {
            page: "https://alexanderustra.github.io/Reservation-App/",
            github: "https://github.com/alexanderustra/Reservation-App",
            tecs: projectDetails.restaurant.tecs,
            description: "Simula la página de un restaurante con funciones como reservas, delivery, descuentos y carrito de compras.",
            images:projectDetails.restaurant.carousel,
            caracteristics: [
                {
                    name: "Reservas",
                    img: projectDetails.restaurant.booking,
                    description: "Permite a los usuarios simular una reserva. Solicita datos clave y valida horarios y fechas realistas."
                },
                {
                    name: "Delivery",
                    img: projectDetails.restaurant.delivery,
                    description: "Permite a los usuarios elegir entre una variedad de platos organizados por categorías. Los usuarios pueden añadirlos al carrito, personalizar ingredientes con ajustes de precio en tiempo real y beneficiarse de descuentos aplicados automáticamente."
                },
                {
                    name: "Seguimiento de órdenes",
                    img: projectDetails.restaurant.track,
                    description: "Registra el tiempo al consolidar una compra y simula el proceso completo: desde la colocación de la orden, su preparación, hasta la finalización del delivery, brindando actualizaciones en tiempo real al usuario."
                }
            ]
        }
    },
    {
        id: 2,
        name: "Montevideo Danger",
        img: projectDetails.montevideoDanger.home,
        data: {
            page: "https://alexanderustra.github.io/MontevideoDanger/",
            github: "https://github.com/alexanderustra/MontevideoDanger",
            tecs: projectDetails.montevideoDanger.tecs,
            description: "Página que divide Montevideo en zonas de peligrosidad según datos oficiales.",
            images:projectDetails.montevideoDanger.carousel,
            caracteristics: [
                {
                    name: "Mapa",
                    img: projectDetails.montevideoDanger.map,
                    description: "Muestra las 24 seccionales policiales, coloreando cada zona según el número de homicidios registrados."
                },
                {
                    name: "Búsqueda por año",
                    img: projectDetails.montevideoDanger.input,
                    description: "permite a los usuarios explorar datos registrados seleccionando un año específico entre 2013 y 2023. El mapa se actualiza en tiempo real según la selección."
                }
            ]
        }
    },
    {
        id: 3,
        name: "JaP eComerce",
        img: projectDetails.eComerce.home,
        data: {
            page: "https://alexanderustra.github.io/JaP-eComerce/",
            github: "https://github.com/alexanderustra/JaP-eComerce",
            tecs: projectDetails.eComerce.tecs,
            description: "proyecto grupal para Jovenes a Programar, se trada de un eComerce realizado con JavaScript y Node.Js principalmente, utilizando APIs para cargar los datos.",
            images:projectDetails.eComerce.carousel,
            caracteristics: [
                {
                    name: "Perfil",
                    img: projectDetails.eComerce.profile,
                    description: "Permite a los usuarios registrarse, iniciar sesión y gestionar su información personal. Cada perfil cuenta con un ID único, con opciones para actualizar datos y cambiar la imagen de perfil. Además, está integrado con un carrito de compras personalizado, asegurando que cada acción esté vinculada al usuario autenticado."
                },
                {
                    name: "Productos",
                    img: projectDetails.eComerce.products,
                    description: "Utiliza una API para cargar dinámicamente los artículos, organizándolos en varias categorías. Cada producto incluye detalles completos, como descripción, imágenes, reseñas de clientes y datos específicos."
                },
                {
                    name: "Carrito",
                    img: projectDetails.eComerce.cart,
                    description: "Permite a los usuarios guardar artículos, ajustar las cantidades y gestionar los productos, incluyendo la opción de eliminarlos. Además, calcula y muestra el precio total en tiempo real."
                },
            ]
        }
    }
];
