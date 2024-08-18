import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <Image src={"/logo.svg"} alt="" width={250} height={150}/>
    </div>
  )
}

export default Navbar