import React from "react";
import {
   Navbar,
   Hero,
   Featured,
   Testimonials,
   CTA,
   Footer,
} from "./components";
import "./App.css";
import styles from "./styles";
import Highlights from "./components/Highlights";
import { highlights } from "./constants";

function App() {
   return (
      <div className="w-full">
         <div className={`${styles.container} p-2 md:px-0 mx-auto`}>
            <Navbar />
         </div>

         <div className="w-full">
            <div
               className={`${styles.container} mx-auto px-[2rem] sm:px-10 mb-20`}
            >
               <Hero />
            </div>
         </div>

         <div
            className={`${styles.container} mx-auto px-[2rem] sm:px-10 mb-20`}
         >
            <div className="mb-[7rem]">
               <Featured />
            </div>

            {highlights.map((highlight, index) => (
               <div className="mb-[7rem]" key={index}>
                  <Highlights key={index} {...highlight} />
               </div>
            ))}

            <div className="mb-[5rem]">
               <Testimonials />
            </div>
            <div className="mb-[12rem]" id="pricing">
               <CTA />
            </div>

            <div id="about">
               <Footer />
            </div>
         </div>
      </div>
   );
}

export default App;
