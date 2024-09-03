import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="hero" style={{ padding: '20px', border: '1px solid black' }}>
      <h1>Hi I am Sam</h1>
      
      {/* Add the click counter elements */}
      <button onClick={handleClick} style={{ marginRight: '10px' }}>Click me!</button>
      <p>Click count: {count}</p>
    </div>
  );
};

export default Hero;