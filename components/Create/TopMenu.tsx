import React from "react";

const CreateTopMenu = ({
  step,
  setStep,
  isNextDisabled,
}: {
  step: number;
  setStep: (newStep: number) => void;
  isNextDisabled: boolean;
}) => {
  const handleStepChange = (newStep: number) => {
    if (!isNextDisabled || step > newStep) {
      setStep(newStep);
    }
  };

  return (
    <div className="hidden md:flex items-center justify-around p-5 border-b text-sm">
      <button
        className={`${
          step === 1
            ? "text-primary border-b border-primary"
            : "text-muted-foreground hover:text-white"
        } cursor-pointer`}
        onClick={() => handleStepChange(1)}
        disabled={step < 1}
      >
        Basic Info
      </button>
      <button
        className={`${
          step === 2
            ? "text-blue-600 border-b border-blue-600"
            : "text-muted-foreground hover:text-white"
        } cursor-pointer`}
        onClick={() => handleStepChange(2)}
        disabled={step < 2 && isNextDisabled}
      >
        Education Info
      </button>
      <button
        className={`${
          step === 3
            ? "text-orange-600 border-b border-orange-600"
            : "text-muted-foreground hover:text-white"
        } cursor-pointer`}
        onClick={() => handleStepChange(3)}
        disabled={step < 3 && isNextDisabled}
      >
        Experience Info
      </button>
      <button
        className={`${
          step === 4
            ? "text-yellow-500 border-b border-yellow-500"
            : "text-muted-foreground hover:text-white"
        } cursor-pointer`}
        onClick={() => handleStepChange(4)}
        disabled={step < 4 && isNextDisabled}
      >
        Social Media
      </button>
      <button
        className={`${
          step === 5
            ? "text-cyan-500 border-b border-cyan-500"
            : "text-muted-foreground hover:text-white"
        } cursor-pointer`}
        onClick={() => handleStepChange(5)}
        disabled={step < 5 && isNextDisabled}
      >
        Skills
      </button>
      <button
        className={`${
          step === 6
            ? "text-pink-500 border-b border-pink-500"
            : "text-muted-foreground hover:text-white"
        } cursor-pointer`}
        onClick={() => handleStepChange(6)}
        disabled={step < 6 && isNextDisabled}
      >
        Projects
      </button>
      <button
        className={`${
          step === 7
            ? "text-rose-600 border-b border-rose-600"
            : "text-muted-foreground hover:text-white"
        } cursor-pointer`}
        onClick={() => handleStepChange(7)}
        disabled={step < 7 && isNextDisabled}
      >
        Templates
      </button>
      <button
        className={`${
          step === 8
            ? "text-green-600 border-b border-green-600"
            : "text-muted-foreground hover:text-white"
        } cursor-pointer`}
        onClick={() => handleStepChange(8)}
        disabled={step < 8 && isNextDisabled}
      >
        Download
      </button>
    </div>
  );
};

export default CreateTopMenu;
