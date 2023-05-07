import React from "react";
import { hero } from "../assets";
import styles from "../styles";
import Button from "./Button";

const Hero = () => {
   return (
      <section>
         <div className="flex md:flex-row flex-col-reverse items-center justify-between w-full gap-[5rem] xl:pt-0 pt-10">
            <div className="flex flex-col md:gap-10 gap-7">
               <h1 className={`${styles.heading1} w-[100%]`}>
                  Discover <br className="md:block hidden" />
                  and collect <br className="md:block hidden" /> rare NFTs
               </h1>
               <p className="text-p">
                  The most secure marketplace for buying <br /> and selling
                  unique crypto assets.
               </p>
               <div className="flex flex-1 gap-5 mt-2 sm:mt-5">
                  <Button text="Buy NFTs" styles="bg-secondary" />
                  <Button
                     text="Sell NFTs"
                     styles="border border-accent border-[0.2rem]"
                  />
               </div>

               <div className="absolute z-[-99] w-[30%] h-[40%] left-[20%] -top-[10%] rounded-full secondary__gradient"></div>
               <div className="absolute z-[-99] w-[30%] h-[50%] right-[0%] top-[40%] rounded-full accent__gradient"></div>
            </div>
            <img
               src={hero}
               alt="hero"
               className="w-[50%] h-[50%] min-w-[250px]"
            />
         </div>
      </section>
   );
};

export default Hero;
