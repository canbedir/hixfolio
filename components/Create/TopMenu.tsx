import React from "react";

const CreateTopMenu = ({ step, setStep }: { step: number; setStep: any }) => {
  const handleStepChange = (newStep: number) => {
    setStep(newStep);
  };

  return (
    <div className="flex items-center justify-around p-5 border-b text-sm">
      <span
        className={`${
          step === 1
            ? "text-primary border-b border-primary"
            : "text-muted-foreground hover:text-black"
        } cursor-pointer`}
        onClick={() => handleStepChange(1)}
      >
        Basic Info
      </span>
      <span
        className={`${
          step === 2
            ? "text-blue-600 border-b border-blue-600"
            : "text-muted-foreground hover:text-black"
        } cursor-pointer`}
        onClick={() => handleStepChange(2)}
      >
        Education Info
      </span>
      <span
        className={`${
          step === 3
            ? "text-orange-600 border-b border-orange-600"
            : "text-muted-foreground hover:text-black"
        } cursor-pointer`}
        onClick={() => handleStepChange(3)}
      >
        Experience Info
      </span>
      <span
        className={`${
          step === 4
            ? "text-yellow-500 border-b border-yellow-500"
            : "text-muted-foreground hover:text-black"
        } cursor-pointer`}
        onClick={() => handleStepChange(4)}
      >
        Social Media
      </span>
      <span
        className={`${
          step === 5
            ? "text-cyan-500 border-b border-cyan-500"
            : "text-muted-foreground hover:text-black"
        } cursor-pointer`}
        onClick={() => handleStepChange(5)}
      >
        Skills
      </span>
      <span
        className={`${
          step === 6
            ? "text-pink-500 border-b border-pink-500"
            : "text-muted-foreground hover:text-black"
        } cursor-pointer`}
        onClick={() => handleStepChange(6)}
      >
        Projects
      </span>
      <span
        className={`${
          step === 7
            ? "text-rose-600 border-b border-rose-600"
            : "text-muted-foreground hover:text-black"
        } cursor-pointer`}
        onClick={() => handleStepChange(7)}
      >
        Templates
      </span>
      <span
        className={`${
          step === 8
            ? "text-green-600 border-b border-green-600"
            : "text-muted-foreground hover:text-black"
        } cursor-pointer`}
        onClick={() => handleStepChange(8)}
      >
        Download
      </span>
    </div>
  );
};

export default CreateTopMenu;
