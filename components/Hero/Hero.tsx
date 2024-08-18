import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-center justify-end gap-y-20">
          <h1 className="text-center text-6xl font-extrabold">
            Create Your Portfolio in Minutes
          </h1>
          <div>
          <div className="w-full h-[150px] px-5 bg-gray-50 flex items-center justify-center shadow-lg rounded-2xl">
            <div className="flex items-center gap-1">
              <h1 className="text-2xl font-semibold">
                Quick and easy portfolio creation for showcasing your work.
              </h1>
              <Button className="text-white text-lg" size={"hix"}>Create Portfolio</Button>
            </div>
          </div>
        </div>
        </div>
        <div>
          <Image
            src={"/illustrator/browsing.svg"}
            alt=""
            width={700}
            height={200}
          />
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
