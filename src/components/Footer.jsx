import React from "react";
import styles, { layout } from "../styles";
import Button from "./Button";

import { heart, pika } from "../assets";

const Footer = () => (
   <section>
      <div className="flex justify-between flex-wrap">
         <div className="min-w-[100px] hidden sm:block">
            <h3 className={styles.heading3}>Krypto.</h3>
         </div>
         <div className="flex grow justify-evenly min-w-[200px] sm:min-w-[375px]">
            <div>
               <h2 className={`${styles.heading2} mb-[1.7rem] font-semibold`}>
                  Krypto
               </h2>
               <a href="#" className="hover:text-accent">
                  <p className={styles.subtitle}>Home</p>
               </a>
               <a href="#" className="hover:text-accent">
                  <p className={styles.subtitle}>About</p>
               </a>
               <a href="#" className="hover:text-accent">
                  <p className={styles.subtitle}>Buy NFTs</p>
               </a>
               <a href="#" className="hover:text-accent">
                  <p className={styles.subtitle}>Sell NFTs</p>
               </a>
            </div>
            <div>
               <h3 className={`${styles.heading2} mb-[1.7rem] font-semibold`}>
                  Market
               </h3>
               <a href="#" className="hover:text-accent">
                  <p className={styles.subtitle}>Browse NFTs</p>
               </a>
               <a href="#" className="hover:text-accent">
                  <p className={styles.subtitle}>Buy NFTs</p>
               </a>
               <a href="#" className="hover:text-accent">
                  <p className={styles.subtitle}>Sell NFTs</p>
               </a>
            </div>
            <div>
               <h2 className={`${styles.heading2} mb-[1.7rem] font-semibold`}>
                  Contact
               </h2>
               <a href="#" className="hover:text-accent">
                  <p className={styles.subtitle}>Email</p>
               </a>
               <a href="#" className="hover:text-accent">
                  <p className={styles.subtitle}>LinkedIn</p>
               </a>
               <a href="#" className="hover:text-accent">
                  <p className={styles.subtitle}>Instagram</p>
               </a>
               <a href="#" className="hover:text-accent">
                  <p className={styles.subtitle}>Twitter</p>
               </a>
            </div>
         </div>
         <div className="flex justify-center w-[100%] mt-[2em] md:justify-normal md:w-auto md:mt-0">
            <div>
               <h4
                  className={`${styles.heading4} mb-4 text-center md:text-left`}
               >
                  Join Our Newsletter
               </h4>
               <form action="POST" method="_blank">
                  <div className="rounded-full bg-featured flex">
                     <label for="submit" className="hidden">
                        Email
                     </label>
                     <input
                        type="text"
                        id="submit"
                        placeholder="What's your email?"
                        className="bg-transparent focus:outline outline-1 outline-accent text-sm p-2 ml-3"
                     />
                     <Button
                        type="submit"
                        value="Submit"
                        text="Submit"
                        adaptive={false}
                        styles="bg-secondary m-1.5 text-sm px-6 py-2"
                     />
                  </div>
               </form>
            </div>
         </div>
      </div>

      <div className="flex flex-col items-center gap-5 mt-2">
         <h1 className="rainbow-text-loop">
            Hi Pancake, my very adorable Pancake, I love you! (idk why this is
            rgb but iz fancy)
         </h1>
         <img className="max-w-[150px]" src={heart} alt="heart" />
         <img className="max-w-[150px]" src={pika} alt="pika" />
      </div>
   </section>
);

export default Footer;
