import React, { useState } from "react";
import { navLinks } from "../constants";
import { close, menu } from "../assets";

const Navbar = () => {
   const [toggle, setToggle] = useState(false);

   return (
      <div className="flex justify-between">
         <h2 className="font-outfit font-black p-6">Krypto.</h2>
         <ul className="sm:flex hidden">
            {navLinks.map((link, index) => (
               <li className="p-6" key={index}>
                  <a href={`#${link.id}`} className="text-md">
                     {link.title}
                  </a>
               </li>
            ))}
         </ul>

         <div className="sm:hidden flex flex-col">
            <img
               src={toggle ? close : menu}
               alt="menu"
               className="h-[1.5rem] w-[1.5rem] object-contain self-end mt-6 mr-4"
               onClick={() => setToggle((prev) => !prev)}
            />
            <ul
               className={`flex-row absolute ${
                  toggle ? "navbar-show" : "navbar-hide"
               } bg-secondary w-[10rem]`}
            >
               {navLinks.map((link, index) => (
                  <li className="p-6 hover:bg-accent" key={index}>
                     <a href={`#${link.id}`} className="text-md">
                        {link.title}
                     </a>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default Navbar;
