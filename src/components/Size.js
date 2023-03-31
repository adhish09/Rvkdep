import React, { useState, useEffect } from 'react';
import Text from './Text/Text';
import NavbarD from './NavbarD.js';
import NavbarM from './NavbarM.js';
function Size() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 668);
    };

    handleResize(); // set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? <NavbarD /> : <NavbarD />}
    </div>
  );
}

export default Size;
