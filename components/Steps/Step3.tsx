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
          <div className="grid grid-cols-2 gap-5">
            <div>
              <Label htmlFor="company">Company Name</Label>
              <Input
                className={shadowColor}
                type="text"
                id="company"
                placeholder="Hix Ltd"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="jobposition">Job Position</Label>
              <Input
                className={shadowColor}
                type="text"
                id="jobposition"
                placeholder="Backend Developer"
                value={jobPosition}
                onChange={(e) => setJobPosition(e.target.value)}
              />
            </div>
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
