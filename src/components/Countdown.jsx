// Countdown.astro.tsx

import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const targetDate = new Date('2023-12-05T15:45:00').getTime();

  const [remainingTime, setRemainingTime] = useState(targetDate - Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(targetDate - Date.now());

      if (remainingTime <= 0) {
        clearInterval(intervalId);
        setRemainingTime(0);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [remainingTime]);

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return (
    <div>
      <h1 class="text-4xl font-semibold">🚀 Lancement, 5 décembre 2023</h1>
      <div>
        {remainingTime > 0 ? (
          <p class="italic font-bold text-2xl text-[#008956]">
            <span class="p-1 rounded-lg bg-gray-100"> {days} jours</span> 
            <span class="p-1 rounded-lg bg-gray-100"> {hours} heures</span> 
            <span class="p-1 rounded-lg bg-gray-100"> {minutes} minutes</span> 
            <span class="p-1 rounded-lg bg-gray-100"> {seconds} secondes</span> 
          </p>
        ) : (
          <span>Lancement !</span>
        )}
      </div>
    </div>
  );
};

export default Countdown;
