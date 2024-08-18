import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-20">
        <div className="flex flex-col items-center justify-end gap-y-10 lg:gap-y-20">
          <h1 className="text-center text-4xl lg:text-6xl font-extrabold">
            Create Your Portfolio in Minutes
          </h1>
          <div className="w-full h-[150px] px-5 flex items-center justify-center shadow-xl rounded-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-5">
              <h1 className="text-xl lg:text-2xl font-semibold">
                Quick and easy portfolio creation for showcasing your work.
              </h1>
              <Button className="text-white text-lg" size={"hix"}>
                Create Portfolio
              </Button>
            </div>
          </div>
        </div>
        <div className="justify-center hidden lg:flex">
          <Image
            src={"/illustrator/browsing.svg"}
            alt="Illustration of browsing"
            width={700}
            height={200}
          />
        </div>
      </div>



      <div className="w-full rounded-2xl max-h-max mt-10 p-5 shadow-xl">
        <h1 className="text-xl text-center font-bold">
          Let’s build a stunning portfolio with our easy-to-use builder.
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-around p-10 gap-5 gap-y-5 lg:gap-y-0">
          <div className="h-[170px] w-[300px] shadow-xl rounded-2xl flex flex-col gap-3">
            <h1 className="text-xl font-bold text-center mt-5">
              No coding required
            </h1>
            <p className="text-center text-lg">
              Create your own portfolio site without coding
            </p>
            <Link href={""} className="text-center">
              <Button variant={"link"} className="text-xl font-bold">
                Load More
              </Button>
            </Link>
          </div>

          <div className="h-[170px] w-[300px] bg-white shadow-xl rounded-2xl flex flex-col gap-3 px-5">
            <h1 className="text-xl font-bold text-center mt-5">
              Fully customizable
            </h1>
            <p className="text-center text-lg">
              Customise your own portfolio site as you like
            </p>
            <Link href={""} className="text-center">
              <Button variant={"link"} className="text-xl font-bold">
                Load More
              </Button>
            </Link>
          </div>

          <div className="h-[170px] w-[300px] bg-white shadow-xl rounded-2xl flex flex-col gap-3 px-5">
            <h1 className="text-xl font-bold text-center mt-5">
              Responsive design
            </h1>
            <p className="text-center text-lg">
              Designed suitable for every device
            </p>
            <Link href={""} className="text-center">
              <Button variant={"link"} className="text-xl font-bold">
                Load More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
