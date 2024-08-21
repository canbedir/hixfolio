"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Link href={"/"} className="inline-block">
        <Image src={"/logo.svg"} alt="" width={250} height={150} />
      </Link>
    </motion.div>
  );
};

export default Navbar;
