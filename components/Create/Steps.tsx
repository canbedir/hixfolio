import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface StepsProps {
  step: number;
  setStep: any | number;
}

const Steps = ({ step, setStep }: StepsProps) => {
  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div>
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
  );
};

export default Steps;
