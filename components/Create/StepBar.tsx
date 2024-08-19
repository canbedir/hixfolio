import React from "react";

const StepBar = ({step}:{step:number}) => {
  return (
    <div className="w-full h-4 rounded-full bg-gray-200">
      <div
        className={`rounded-full h-4 transition-width duration-300 ${
          step === 8 ? "bg-green-500 shadow-lg shadow-green-500" : "bg-primary"
        }`}
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
