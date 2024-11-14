import React from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';

interface SwipeNavigatorProps {
  onSwipeLeft?: (navigate: NavigateFunction) => void;
  onSwipeRight?: (navigate: NavigateFunction) => void;
  onSwipeUp?: (navigate: NavigateFunction) => void;
  onSwipeDown?: (navigate: NavigateFunction) => void;
}

const SwipeNavigator: React.FC<SwipeNavigatorProps> = ({
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
}) => {
  const navigate = useNavigate();

  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX = e.touches[0].clientX;
    touchEndY = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 50 && onSwipeRight) {
        onSwipeRight(navigate);
      } else if (deltaX < -50 && onSwipeLeft) {
        onSwipeLeft(navigate);
      }
    } else {
      if (deltaY > 50 && onSwipeDown) {
        onSwipeDown(navigate);
      } else if (deltaY < -50 && onSwipeUp) {
        onSwipeUp(navigate);
      }
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      id='navegationSwipe'
    >
    </div>
  );
};

export default SwipeNavigator;
