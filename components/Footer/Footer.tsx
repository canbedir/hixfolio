import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="shadow-black shadow-xl p-5 m-2 mt-4 h-[100px] border-t border-black/10">
      <div className="flex items-center justify-between h-full container max-w-7xl">
        <div>© 2024 liseden mezun olunca inş iş bulurum</div>
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
    </div>
  );
};

export default Footer;
