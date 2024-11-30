import React, { useEffect } from 'react';

export default function YTdown() {
  useEffect(() => {
    const interval = setInterval(() => {
      window.open('https://www.profitablecpmrate.com/san5u3fpe?key=90564277f2c6764919def1db969b441e', '_blank');
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      {/* The component will open a new tab every 5 seconds */}
    </div>
  );
}
