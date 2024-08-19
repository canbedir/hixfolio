"use client";
import StepBar from "@/components/Create/StepBar";
import Steps from "@/components/Create/Steps";
import CreateTopMenu from "@/components/Create/TopMenu";
import { useState } from "react";

const CreateIdPage = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="container max-w-4xl h-[800px]">
      <div className="flex flex-col items-center justify-center gap-16 h-full">
        <StepBar step={step} />
        <div>
          <h1 className="text-4xl md:text-6xl text-center font-extrabold">
            Complete Your Profil
          </h1>
        </div>
        <div className="w-full min-h-[400px] relative shadow-lg shadow-primary">
          <div>
            <CreateTopMenu setStep={setStep} step={step} />
            <Steps step={step} setStep={setStep} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateIdPage;
