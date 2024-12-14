import "../App.css"; 

import  { useEffect ,useState } from "react";
import styles from './project.module.css'


interface props {
  interval:number
  images: string[] 
}
const ImageCarousel = ({ interval = 3000 ,images}:props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Configura el temporizador para cambiar de imagen
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer); // Limpia el temporizador al desmontar
  }, [interval]);

  return (
    <div className= {styles.carousel}>
      <img
        src={images[currentIndex]}
        alt={`Imagen ${currentIndex + 1}`}
      />
    </div>
  );
};

export default ImageCarousel;
