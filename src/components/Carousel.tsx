import "../App.css"; 
import { useEffect, useState } from "react";
import styles from './project.module.css';

interface props {
  interval: number;
  images: string[];
}

const ImageCarousel = ({ interval = 3000, images }: props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageLoaded(false); // Reset loading al cambiar de imagen
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, images.length]);

  return (
    <div className={styles.carousel}>
      {!imageLoaded && <div className={styles.caracteristicSkeleton}></div>}
      <img
        src={images[currentIndex]}
        alt={`Imagen ${currentIndex + 1}`}
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
};

export default ImageCarousel;
