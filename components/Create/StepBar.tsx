import React from "react";

const StepBar = ({ step }: { step: number }) => {
  const shadowColor = 
  `
  ${step === 1 && `shadow-lg shadow-primary`}
  ${step === 2 && `shadow-lg shadow-blue-600`}
  ${step === 3 && `shadow-lg shadow-orange-600`}
  ${step === 4 && `shadow-lg shadow-yellow-500`}
  ${step === 5 && `shadow-lg shadow-cyan-500`}
  ${step === 6 && `shadow-lg shadow-pink-500`}
  ${step === 7 && `shadow-lg shadow-rose-600`}
  ${step === 8 && `shadow-lg shadow-green-600`}
  `;

  return (
    <div className="w-full h-5 rounded-full bg-gray-200">
      <div
        className={`rounded-full h-5 transition-width duration-700 
          ${step === 1 && `shadow-lg shadow-primary bg-primary`}
          ${step === 2 && `shadow-lg shadow-blue-600 bg-blue-600`}
          ${step === 3 && `shadow-lg shadow-orange-600 bg-orange-600`}
          ${step === 4 && `shadow-lg shadow-yellow-500 bg-yellow-500`}
          ${step === 5 && `shadow-lg shadow-cyan-500 bg-cyan-500`}
          ${step === 6 && `shadow-lg shadow-pink-500 bg-pink-500`}
          ${step === 7 && `shadow-lg shadow-rose-600 bg-rose-600`}
          ${step === 8 && `shadow-lg shadow-green-600 bg-green-600`}
          `}
        style={{
          width:
            step === 1
              ? "12.5%"
              : step === 2
              ? "25%"
              : step === 3
              ? "37.5%"
              : step === 4
              ? "50%"
              : step === 5
              ? "62.5%"
              : step === 6
              ? "75%"
              : step === 7
              ? "87.5%"
              : "100%",
        }}
      ></div>
    </div>
  );
};

export default StepBar;
