import React from "react";
import Button from "./Button";
import styles, { layout } from "../styles";

const CTA = () => (
   <section>
      <div
         className={`${layout.flexCenter} flex-col w-full h-[25em] bg-gradient-to-r from-secondary to-accent rounded-[2rem]`}
      >
         <h2
            className={`${styles.heading2} text-primary text-[1.3em] font-semibold mb-[1rem]`}
         >
            Are you ready?
         </h2>
         <h1 className={`${styles.heading1} text-center mb-[2rem]`}>
            Be a part of the <br /> next BIG thing.
         </h1>
         <Button text="Get Started" styles="bg-primary rounded-full" />
      </div>
   </section>
);

export default CTA;
