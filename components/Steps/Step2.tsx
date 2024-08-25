import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import DateSelector from "../Create/DateSelector";

interface Step2Props {
  school: string;
  setSchool: (school: string) => void;
  shadowColor: string;
}

const Step2: React.FC<Step2Props> = ({ school, setSchool, shadowColor }) => {
  return (
    <div className="p-5">
      <div className="flex flex-col gap-10 md:gap-3 lg:gap-10">
        <div className="flex items-center gap-5">
          <Label htmlFor="school">School</Label>
          <Input
            id="school"
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            placeholder="Enter your school"
          />
        </div>
        <div>
          <DateSelector />
        </div>
      </div>
    </div>
  );
};

export default Step2;
