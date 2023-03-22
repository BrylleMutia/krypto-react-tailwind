import React from "react";
import { hero } from "../assets";
import Button from "./Button";

const Hero = () => {
   return (
      <section>
         <div className="flex flex-1 items-center justify-between w-full gap-[5rem]">
            <div className="flex flex-col">
               <h2 className="font-outfit font-black sm:text-[5rem] text-[2rem] w-[100%] leading-[6rem] mb-10">
                  Discover <br />
                  and collect <br /> rare NFTs
               </h2>
               <p className="text-[1.5rem]">
                  The most secure marketplace for buying <br /> and selling
                  unique crypto assets.
               </p>
            </div>
            <img src={hero} alt="hero" className="w-[50%] h-[50%]" />
         </div>

         <div className="flex flex-1 gap-5">
            <Button text="Buy NFTs" styles="bg-secondary" />
            <Button
               text="Sell NFTs"
               styles="border border-accent border-[0.2rem]"
            />
         </div>
      </section>
   );
};

export default Hero;
