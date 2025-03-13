import { useState, useEffect } from 'react';

export const useCounter = (initialValue = 0) => {
  const getInitialCount = () => {
    const savedCount = localStorage.getItem('count');
    return savedCount !== null ? parseInt(savedCount, 10) : initialValue;
  };

  const [count, setCount] = useState(getInitialCount);

  const increment = () => {
    if (count < 10) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const favoritenumber = (count) => {
    if (count === 7) return "Su numero favorito es el 7";
  };

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  return {
    count,
    increment,
    decrement,
    favoritenumber
  };
};

