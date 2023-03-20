import React from "react";
import { navLinks } from "../constants";

const Navbar = () => (
   <div className="flex justify-between">
      <h2 className="font-outfit font-black p-6">Krypto.</h2>
      <ul className="flex">
         {navLinks.map((link, index) => (
            <li className="p-6" key={index}>
               <a href={`#${link.id}`} className="text-md">
                  {link.title}
               </a>
            </li>
         ))}
      </ul>
   </div>
);

export default Navbar;
