"use client";
import StepBar from "@/components/Create/StepBar";
import Steps from "@/components/Create/Steps";
import CreateTopMenu from "@/components/Create/TopMenu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const CreateIdPage = () => {
  const [step, setStep] = useState(1);

  const shadowColor = `
  ${step === 1 && `shadow-lg shadow-primary`}
  ${step === 2 && `shadow-lg shadow-blue-600`}
  ${step === 3 && `shadow-lg shadow-orange-600`}
  ${step === 4 && `shadow-lg shadow-yellow-500`}
  ${step === 5 && `shadow-lg shadow-cyan-500`}
  ${step === 6 && `shadow-lg shadow-pink-500`}
  ${step === 7 && `shadow-lg shadow-rose-600`}
  ${step === 8 && `shadow-lg shadow-green-600`}
  `;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container max-w-4xl h-[800px]"
    >
      <Link href={"/"} className="absolute left-5 top-5">
        <Image src={"/logo.svg"} alt="" width={200} height={100} />
      </Link>
      <div className="flex flex-col items-center justify-center gap-16 h-full">
        <StepBar step={step} />
        <div>
          <h1 className="text-4xl md:text-6xl text-center font-extrabold">
            Complete Your Profil
          </h1>
        </div>
        <div
          className={`w-full min-h-[400px] duration-300 relative ${shadowColor}`}
        >
          <div>
            <CreateTopMenu setStep={setStep} step={step} />
            <Steps step={step} setStep={setStep} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CreateIdPage;
