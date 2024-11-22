import React, { useRef, useState } from "react";
import "../App.css"; 

const Carousel = ({ items }: { items: React.ReactNode[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: React.DragEvent | React.TouchEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setDragStartX(clientX);
    setDragging(true);
  };

  const handleDragMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!dragging || !containerRef.current) return;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - dragStartX;

    // Translada el contenedor durante el arrastre
    containerRef.current.style.transform = `translateX(calc(${-currentIndex * 100}% + ${deltaX}px))`;
  };

  const handleDragEnd = (e: React.TouchEvent | React.MouseEvent) => {
    if (!dragging) return;

    const clientX = "touches" in e ? e.changedTouches[0].clientX : e.clientX;
    const deltaX = clientX - dragStartX;

    setDragging(false);

    // Cambia de índice si el arrastre fue significativo
    if (deltaX > 50 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (deltaX < -50 && currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }

    // Restaura la posición
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${-currentIndex * 100}%)`;
    }
  };

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        ref={containerRef}
        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
        onMouseDown={handleDragStart as any}
        onMouseMove={dragging ? handleDragMove : undefined}
        onMouseUp={handleDragEnd as any}
        onMouseLeave={dragging ? handleDragEnd : undefined}
        onTouchStart={handleDragStart}
        onTouchMove={dragging ? handleDragMove : undefined}
        onTouchEnd={handleDragEnd}
      >
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
