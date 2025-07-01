import { useRef } from 'react';

export function useCountdownAlert(start = 6, delay = 1000) {
  const valueRef = useRef(null);

  const startCountdown = () => {
    let count = start;

    if (!valueRef.current) return;

    valueRef.current.innerText = count;

    const interval = setInterval(() => {
      count--;
      if (valueRef.current) valueRef.current.innerText = count;

      if (count === 0) {
        clearInterval(interval);
      }
    }, delay);
  };

  return {
    valueRef,
    startCountdown,
  };
}
