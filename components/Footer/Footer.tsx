"use client";
import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";
import ConfettiPage from "../confetti";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="shadow-primary shadow-md m-1 mt-5 h-[100px]"
    >
      <div className="flex items-center justify-between h-full container max-w-7xl">
        <div>© 24082026 0258</div>
        <ConfettiPage />
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
