import React, { useState, useEffect } from 'react';

function LoadingIndicator() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots(dots => dots.length < 3 ? dots + '.' : '');
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Loading{dots}</div>;
}

export default LoadingIndicator;