import React, { useState, useEffect } from 'react';
import QuoteGenerator from './components/QuoteGenerator';
import './App.css'; // Or your preferred global styles

const App: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="app-container">
      <div className="digital-clock">{currentTime}</div>
      <header className="app-header">
        <h1>Inspire Me</h1>
        <p className="subtitle">Get a dose of wisdom and motivation.</p>
      </header>
      <main className="app-main">
        <QuoteGenerator />
      </main>
     
    </div>
  );
};

export default App;