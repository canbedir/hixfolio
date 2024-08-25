import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";

interface Step7Props {
  color: string;
  setColor: (color: string) => void;
  colors: Array<{ hex: string; name: string }>;
}

const Step7: React.FC<Step7Props> = ({ color, setColor, colors }) => {
  return (
    <div className="p-5 h-[335px] flex items-center justify-center">
      <div className="flex flex-col items-center text-center gap-2">
        <h1 className="text-4xl font-bold">Last Step 🎉</h1>
        <p className="text-lg font-medium">
          Choose a color for your portfolio site!
        </p>
        <div className="flex items-center justify-center gap-3">
          {colors.map((colorOption) => (
            <HoverCard key={colorOption.hex}>
              <HoverCardTrigger>
                <div
                  className={`w-8 h-8 rounded-full cursor-pointer ${
                    color === colorOption.hex ? "ring-2 ring-offset-2" : ""
                  }`}
                  style={{ backgroundColor: colorOption.hex }}
                  onClick={() => setColor(colorOption.hex)}
                ></div>
              </HoverCardTrigger>
              <HoverCardContent>{colorOption.name}</HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step7;
