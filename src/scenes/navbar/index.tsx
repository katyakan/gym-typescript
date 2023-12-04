import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react";
import Logo from "@/assets/Logo.png"

type Props = {}
const flexBetween = "flex items-center justify-between"
const Navbar = (props: Props) => {
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}> 
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
           {/* left side */}
          <img alt="logo" src={Logo}/>
          {/* right side */}
          <div  className={`${flexBetween} w-full `}>
            <div className={`${flexBetween} gap-8 text-sm`}>
              <p>Home</p>
              <p>Benefits</p>
              <p>Our classes</p>
              <p>Contact us</p>
            </div>
            <div className={`${flexBetween} gap-8`}>
            <p>Sign In</p>
            <button>Become a Member</button>
            </div>
          </div>
      </div>
      </div>
      </div>
     </nav>
  )
}

export default Navbar