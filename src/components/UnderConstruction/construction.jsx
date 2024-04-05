import React, { useState, useEffect } from 'react';
import './construction.css'; // You can style this component in a separate CSS file

const Floater = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`floater ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="floater-content">
        <span className="icon">🚧</span>
        <span>This website is under construction</span>
      </div>
    </div>
  );
};

export default Floater;
