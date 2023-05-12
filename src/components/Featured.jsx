import React from "react";
import { featured } from "../constants";
import styles from "../styles";

const Featured = ({ companies }) => (
   <section className="w-full">
      <h2 className={`${styles.heading2} mb-3`}>Featured on</h2>
      <div className="bg-featured rounded-lg">
         <ul className="flex flex-1 flex-wrap align-center justify-center gap-5 object-contain py-5">
            {companies.map((company) => (
               <li className="my-auto min-w-[200px]" key={company.alt}>
                  <img
                     src={company.imgSrc}
                     alt={company.alt}
                     className="mx-auto"
                  />
               </li>
            ))}
         </ul>
      </div>
   </section>
);

export default Featured;
