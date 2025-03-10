
import { useState } from 'react'


export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue)

  const increment = () => {
    if (count < 10) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  const favoritenumber = () => { if (count === 7) ("Your favorite number is " `${count}`);
    
  }

  return {
    count,
    increment,
    decrement,
    favoritenumber
  }


}

