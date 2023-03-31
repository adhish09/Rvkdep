import React, { useState, useEffect } from 'react';
import FooterD from './FooterD.js';
import FooterM from './FooterM.js';
function Footer() {
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
      {isMobile ? <FooterM /> : <FooterD />}
    </div>
  );
}

export default Footer;
