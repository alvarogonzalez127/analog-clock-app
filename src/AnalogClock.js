import React, { useEffect, useRef } from 'react';
import './AnalogClock.css';

const AnalogClock = () => {
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      const secondsDeg = ((seconds / 60) * 360) + 90;
      const minutesDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
      const hoursDeg = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

      secondRef.current.style.transform = `rotate(${secondsDeg}deg)`;
      minuteRef.current.style.transform = `rotate(${minutesDeg}deg)`;
      hourRef.current.style.transform = `rotate(${hoursDeg}deg)`;
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      <div className="dial plate">
        <div ref={hourRef} className="hand hour"></div>
        <div ref={minuteRef} className="hand minute"></div>
        <div ref={secondRef} className="hand second"></div>
      </div>
    </div>
  );
};

export default AnalogClock;