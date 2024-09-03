"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ChooseUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="shadow-primary shadow-lg p-5 rounded-xl"
    >
      <h1 className="text-5xl font-bold text-center">Why Choose Us?</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-20">
        <div className="flex flex-col justify-center gap-2">
          <h1 className="text-3xl font-bold text-primary">
            User-Friendly Design
          </h1>
          <p className="text-muted-foreground">
            We pride ourselves on offering a user-friendly interface that makes
            portfolio creation as seamless as possible. Whether you&apos;re
            tech-savvy or a beginner, our intuitive design ensures that you can
            easily navigate through the process. Our platform guides you
            step-by-step, allowing you to focus on what truly matters-showcasing
            your talents and achievements in the best possible light. No
            complicated settings or unnecessary distractions, just a clean,
            efficient tool that helps you build a portfolio that stands out.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={"/illustrator/add-color.svg"}
            alt=""
            width={500}
            height={100}
          />
        </div>

        <div className="flex items-center justify-center">
          <Image
            src={"/illustrator/complete.svg"}
            alt=""
            width={500}
            height={100}
          />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <h1 className="text-3xl font-bold text-primary">
            Time-Saving Efficiency
          </h1>
          <p className="text-muted-foreground">
            We understand that your time is valuable, which is why we&apos;ve
            designed our platform to be incredibly efficient. With just a few
            clicks, you can create a professional-looking portfolio that
            accurately reflects your skills and experiences. Our pre-designed
            templates and easy-to-use customization options allow you to focus
            less on the technical details and more on what you want to showcase.
            Say goodbye to spending hours on formatting and design-our tool does
            the heavy lifting for you, so you can have your portfolio ready in
            no time.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ChooseUs;
