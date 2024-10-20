import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000); // Update time every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="text-black p-2 rounded-lg">
      <h2 className="text-lg font-semibold"></h2>
      <p className="text-xl">{time}</p>
    </div>
  );
};

export default Clock;
