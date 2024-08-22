"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex items-center justify-between m-5">
        <Link href={"/"} className="inline-block">
          <Image src={"/logo.svg"} alt="" width={250} height={150} />
        </Link>
        <ModeToggle/>
      </div>
    </motion.div>
  );
};

export default Navbar;
