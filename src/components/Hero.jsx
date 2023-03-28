import React from "react";
import { hero } from "../assets";
import Button from "./Button";

const Hero = () => {
   return (
      <section>
         <div className="flex md:flex-row flex-col-reverse items-center justify-between w-full gap-[5rem] xl:pt-0 pt-10">
            <div className="flex flex-col md:gap-10 gap-7">
               <h className="font-outfit font-black text-h1 w-[100%]">
                  Discover <br className="md:block hidden" />
                  and collect <br className="md:block hidden" /> rare NFTs
               </h>
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
