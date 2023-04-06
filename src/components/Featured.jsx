import React from "react";
import { logo1, logo2, logo3, logo4 } from "../assets";
import styles from "../styles";

const Featured = () => (
   <section className="w-full">
      <h2 className={`${styles.heading2} mb-3`}>Featured on</h2>
      <div className="bg-featured rounded-lg">
         <ul className="flex flex-1 flex-wrap align-center justify-center gap-5 object-contain py-5">
            <li className="my-auto min-w-[200px]">
               <img src={logo1} alt="Featured company 1" className="mx-auto" />
            </li>
            <li className="my-auto min-w-[200px]">
               <img src={logo2} alt="Featured company 2" className="mx-auto" />
            </li>
            <li className="my-auto min-w-[200px]">
               <img src={logo3} alt="Featured company 3" className="mx-auto" />
            </li>
            <li className="my-auto min-w-[200px]">
               <img src={logo4} alt="Featured company 4" className="mx-auto" />
            </li>
         </ul>
      </div>
   </section>
);

export default Featured;
