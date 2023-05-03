import React from "react";
import {
   Navbar,
   Hero,
   Featured,
   Analytics,
   Download,
   Testimonials,
   CTA,
   Footer,
} from "./components";
import "./App.css";
import styles from "./styles";
import Highlights from "./components/Highlights";
import { highlights } from "./constants";

// temp images fix
import { analytics, download } from "./assets";
import { layout } from "./styles";
import Button from "./components/Button";

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

            {/* temp images fix */}
            {/* {highlights.map((highlight, index) => (
               <div className="mb-[7rem]">
                  <Highlights key={index} {...highlight} />
               </div>
            ))} */}

            <section className="mb-[7rem]">
               <div className={`${layout.flexCenter} left gap-10 flex-wrap`}>
                  <img src={analytics} alt="analytics" />
                  <div className="flex flex-col items-start gap-7 lg:w-[50%] w-[100%]">
                     <h2 className={`${styles.heading2} text-accent`}>
                        Analytics
                     </h2>
                     <h1 className={`${styles.heading1} capitalize`}>
                        built-in analytics to track your NFTs
                     </h1>
                     <p className="text-p">
                        Use our built-in analytics dashboard to pull valuable
                        insights and monitor the value of your Krypto portfolio
                        over time.
                     </p>
                     <Button text="view our pricing" styles="bg-secondary" />
                  </div>
               </div>
            </section>
            <section className="mb-[7rem]">
               <div
                  className={`${layout.flexCenter} flex-row-reverse gap-10 flex-wrap`}
               >
                  <img src={download} alt="download" />
                  <div className="flex flex-col items-start gap-7 lg:w-[50%] w-[100%]">
                     <h2 className={`${styles.heading2} text-accent`}>
                        Get our app
                     </h2>
                     <h1 className={`${styles.heading1} capitalize`}>
                        browse NFTs from your smartphone
                     </h1>
                     <p className="text-p">
                        Our Krypto app is the easiest way to keep track of your
                        assets when you're on the go.
                     </p>
                     <Button text="Download on ios" styles="bg-secondary" />
                  </div>
               </div>
            </section>

            <div className="mb-[5rem]">
               <Testimonials />
            </div>
            <div className="mb-[12rem]">
               <CTA />
            </div>
            <Footer />
         </div>
      </div>
   );
}

export default App;
