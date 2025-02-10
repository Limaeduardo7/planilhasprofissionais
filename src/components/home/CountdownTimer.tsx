import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(12 * 60); // 12 minutos em segundos

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex flex-col items-center mb-8">
      <p className="text-lg text-red-500 mb-2">Oferta expira em:</p>
      <div className="flex gap-4 text-4xl font-bold">
        <div className="glass p-4 rounded-lg">
          <span className="text-white">{String(minutes).padStart(2, '0')}</span>
          <span className="text-sm block text-gray-400">minutos</span>
        </div>
        <div className="text-4xl font-bold flex items-start pt-4">:</div>
        <div className="glass p-4 rounded-lg">
          <span className="text-white">{String(seconds).padStart(2, '0')}</span>
          <span className="text-sm block text-gray-400">segundos</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer; 