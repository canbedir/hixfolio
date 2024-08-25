import React from "react";
import { Button } from "../ui/button";

interface Step8Props {
  handleDownload: () => void;
}

const Step8: React.FC<Step8Props> = ({ handleDownload }) => {
  return (
    <div className="p-5 h-[335px]">
      <div className="text-center h-full flex items-center justify-center flex-col gap-5">
        <h1 className="text-4xl font-bold">
          Your portfolio site is ready! 🥳
        </h1>
        <Button
          className="text-white bg-green-600 hover:bg-green-500"
          onClick={handleDownload}
        >
          Download Portfolio
        </Button>
      </div>
    </div>
  );
};

export default Step8;