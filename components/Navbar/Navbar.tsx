import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image src={"/logo.svg"} alt="" width={250} height={150} />
      </Link>
    </div>
  );
};

export default Navbar;
