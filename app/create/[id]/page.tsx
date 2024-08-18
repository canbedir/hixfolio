"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const CreateIdPage = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleStepChange = (newStep: number) => {
    setStep(newStep);
  };

  return (
    <div className="container max-w-4xl h-[800px]">
      <div className="flex flex-col items-center justify-center gap-16 h-full">
        <div className="w-full h-4 rounded-full bg-gray-200">
          <div
            className={`rounded-full h-4 bg-primary transition-width duration-300 ${
              step === 8 ? "bg-green-500 shadow-lg shadow-green-500" : ""
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
        <div>
          <h1 className="text-4xl md:text-6xl text-center font-extrabold">
            Complete Your Profil
          </h1>
        </div>
        <div className="w-full h-[400px] shadow-lg shadow-primary">
          <div>
            <div className="flex items-center justify-around p-5 border-b text-sm">
              <span
                className={`${
                  step === 1
                    ? "text-primary border-b border-primary"
                    : "text-muted-foreground hover:text-gray-200"
                } cursor-pointer`}
                onClick={() => handleStepChange(1)}
              >
                Basic Info
              </span>
              <span
                className={`${
                  step === 2
                    ? "text-primary border-b border-primary"
                    : "text-muted-foreground hover:text-black"
                } cursor-pointer`}
                onClick={() => handleStepChange(2)}
              >
                Education Info
              </span>
              <span
                className={`${
                  step === 3
                    ? "text-primary border-b border-primary"
                    : "text-muted-foreground hover:text-black"
                } cursor-pointer`}
                onClick={() => handleStepChange(3)}
              >
                Experience Info
              </span>
              <span
                className={`${
                  step === 4
                    ? "text-primary border-b border-primary"
                    : "text-muted-foreground hover:text-black"
                } cursor-pointer`}
                onClick={() => handleStepChange(4)}
              >
                Social Media
              </span>
              <span
                className={`${
                  step === 5
                    ? "text-primary border-b border-primary"
                    : "text-muted-foreground hover:text-black"
                } cursor-pointer`}
                onClick={() => handleStepChange(5)}
              >
                Skills
              </span>
              <span
                className={`${
                  step === 6
                    ? "text-primary border-b border-primary"
                    : "text-muted-foreground hover:text-black"
                } cursor-pointer`}
                onClick={() => handleStepChange(6)}
              >
                Projects
              </span>
              <span
                className={`${
                  step === 7
                    ? "text-primary border-b border-primary"
                    : "text-muted-foreground hover:text-black"
                } cursor-pointer`}
                onClick={() => handleStepChange(7)}
              >
                Templates
              </span>
              <span
                className={`${
                  step === 8
                    ? "text-primary border-b border-primary"
                    : "text-muted-foreground hover:text-black"
                } cursor-pointer`}
                onClick={() => handleStepChange(8)}
              >
                Download
              </span>
            </div>

            {step === 1 && (
              <div className="p-5">
                <div className="flex flex-col gap-5">
                  <div className="w-1/2 flex flex-col gap-5">
                    <div>
                      <Label htmlFor="name">Name & Surname</Label>
                      <Input
                        className="shadow-lg shadow-primary"
                        type="text"
                        id="name"
                        placeholder="Irmak Balota"
                      />
                    </div>
                    <div>
                      <Label htmlFor="JobTitle">Job Title</Label>
                      <Input
                        className="shadow-lg shadow-primary"
                        type="text"
                        id="JobTitle"
                        placeholder="Fullstack Developer"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <div>
                        <Label htmlFor="Email">Email</Label>
                        <Input
                          className="shadow-lg shadow-primary"
                          type="text"
                          id="Email"
                          placeholder="hix@dev.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="City">City</Label>
                        <Input
                          className="shadow-lg shadow-primary"
                          type="text"
                          id="City"
                          placeholder="Istanbul"
                        />
                      </div>
                    </div>
                    <div className="w-1/2">
                      <Label htmlFor="Phone">Phone</Label>
                      <Input
                        className="shadow-lg shadow-primary"
                        type="text"
                        id="Phone"
                        placeholder="000 000 00 00"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      onClick={handleNext}
                      className="text-white text-lg"
                      size={"lg"}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateIdPage;
