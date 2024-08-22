"use client";
import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="shadow-primary shadow-md m-1 mt-5 h-[100px]"
    >
      <div className="flex items-center justify-between h-full container max-w-7xl">
        <div>© 2024 liseden mezun olunca inş iş bulurum</div>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-primary to-indigo-900 text-4xl font-semibold">
          hix
        </h1>
        <div className="flex items-center justify-center gap-3">
          <Link href={"https://www.linkedin.com/in/canbedir/"}>
            <IoLogoLinkedin size={30} />
          </Link>
          <Link href={"https://www.github.com/canbedir"}>
            <FaGithub size={30} />
          </Link>
          <Link href={"https://www.x.com/canhix"}>
            <FaXTwitter size={25} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
