"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col items-center justify-end gap-y-10 lg:gap-y-20">
          <h1 className="text-center text-4xl lg:text-6xl font-extrabold">
            Create Your Portfolio in Minutes
          </h1>
          <div className="box w-full h-[150px] px-5 flex items-center justify-center bg-white text-black dark:text-white dark:bg-[#181717]">
            <div className="flex flex-col lg:flex-row items-center gap-5">
              <h1 className="text-xl lg:text-2xl font-semibold">
                Quick and easy portfolio creation for showcasing your work.
              </h1>
              <Link href={"/create"}>
                <Button className="text-white text-lg" size={"hix"}>
                  Create Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="justify-center shadow-primary shadow-lg hidden lg:flex">
          <Image
            src={"/illustrator/browsing.svg"}
            alt="Illustration of browsing"
            width={700}
            height={200}
          />
        </div>
      </div>

      <div className="w-full rounded-2xl max-h-max mt-10 p-5 shadow-primary shadow-lg">
        <h1 className="text-xl text-center font-bold">
          Let’s build a stunning portfolio with our easy-to-use builder.
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-around p-10 gap-5 gap-y-5 lg:gap-y-0">
          <div className="h-[170px] w-[300px] dark:shadow-blue-950 shadow-xl rounded-2xl flex flex-col gap-3">
            <h1 className="text-xl font-bold text-center mt-5">
              No coding required
            </h1>
            <p className="text-center text-lg">
              Create your own portfolio site without coding
            </p>
            <Link href={""} className="text-center">
              <Button
                variant={"link"}
                className="text-xl font-bold dark:text-blue-600"
              >
                Load More
              </Button>
            </Link>
          </div>

          <div className="h-[170px] w-[300px] dark:shadow-blue-950 shadow-xl rounded-2xl flex flex-col gap-3 px-5">
            <h1 className="text-xl font-bold text-center mt-5">
              Fully customizable
            </h1>
            <p className="text-center text-lg">
              Customise your own portfolio site as you like
            </p>
            <Link href={""} className="text-center">
              <Button
                variant={"link"}
                className="text-xl font-bold dark:text-blue-600"
              >
                Load More
              </Button>
            </Link>
          </div>

          <div className="h-[170px] w-[300px] dark:shadow-blue-950 shadow-xl rounded-2xl flex flex-col gap-3 px-5">
            <h1 className="text-xl font-bold text-center mt-5">
              Responsive design
            </h1>
            <p className="text-center text-lg">
              Designed suitable for every device
            </p>
            <Link href={""} className="text-center">
              <Button
                variant={"link"}
                className="text-xl font-bold dark:text-blue-600"
              >
                Load More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
