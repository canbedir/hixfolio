import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import DateSelector from "../Create/DateSelector";

interface Step3Props {
  company: string;
  setCompany: (company: string) => void;
  jobPosition: string;
  setJobPosition: (jobPosition: string) => void;
  shadowColor: string;
}

const Step3: React.FC<Step3Props> = ({
  company,
  setCompany,
  jobPosition,
  setJobPosition,
  shadowColor,
}) => {
  return (
    <div className="p-5">
      <div className="flex items-center">
        <div className="flex flex-col w-full gap-10">
          <div className="flex items-center gap-5">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Enter your company"
            />
          </div>
          <div className="flex items-center gap-5">
            <Label htmlFor="jobPosition">Job Position</Label>
            <Input
              id="jobPosition"
              type="text"
              value={jobPosition}
              onChange={(e) => setJobPosition(e.target.value)}
              placeholder="Enter your job position"
            />
          </div>
          <div>
            <DateSelector />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
