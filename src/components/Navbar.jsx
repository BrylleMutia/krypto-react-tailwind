import React, { useState } from "react";
import { navLinks } from "../constants";
import { close, menu } from "../assets";

const Navbar = ({ links }) => {
   const [toggle, setToggle] = useState(false);

   return (
      <div className="flex justify-between overflow-hidden">
         <h2 className="font-outfit font-black p-6">Krypto.</h2>
         <ul className="sm:flex hidden">
            {links.map((link, index) => (
               <li className="flex items-center p-2" key={index}>
                  <a
                     href={`#${link.title.toLowerCase()}`}
                     className="text-md transition-all px-6 py-2 hover:bg-accent"
                  >
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
               {links.map((link, index) => (
                  <li className="hover:bg-accent h-[70px]" key={index}>
                     <a
                        href={`#${link.title.toLowerCase()}`}
                        className="text-md block h-full py-5 pl-4"
                     >
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
