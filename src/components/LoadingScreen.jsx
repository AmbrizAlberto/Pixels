'use client';

import React, { useEffect, useState } from 'react';
import "../../public/css/spinner.css"; // Ensure the correct path to the CSS file

const LoadingScreen = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <div className="loading-screen">
      <div className="spinner">
        <span className="loaderspinner"></span>
      </div>
    </div>
  );
};

export default LoadingScreen;
