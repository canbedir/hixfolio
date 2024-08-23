"use client";
import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";

const ConfettiPage = () => {
  const [canClick, setCanClick] = useState(true);

  const triggerConfetti = () => {
    if (canClick) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      setCanClick(false);

      setTimeout(() => {
        setCanClick(true);
      }, 4000);
    }
  };

  return (
    <h1
      onClick={triggerConfetti}
      className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-primary to-indigo-900 text-4xl font-semibold cursor-pointer"
    >
      hix
    </h1>
  );
};

export default ConfettiPage;
