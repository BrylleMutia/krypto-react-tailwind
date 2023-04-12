import React from "react";
import styles, { layout } from "../styles";
import Button from "./Button";

const Highlights = ({
   title,
   header,
   paragraph,
   img,
   imgAlign,
   buttonText,
}) => {
   return (
      <section>
         <div
            className={`${layout.flexCenter} ${
               imgAlign === "left" && "flex-row-reverse"
            } gap-10 flex-wrap`}
         >
            <img src={`../src/assets/${img}.png`} alt="title" />
            <div className="flex flex-col items-start gap-7 lg:w-[50%] w-[100%]">
               <h2 className={`${styles.heading2} text-accent`}>{title}</h2>
               <h1 className={`${styles.heading1} capitalize`}>{header}</h1>
               <p className="text-p">{paragraph}</p>
               <Button text={buttonText} styles="bg-secondary" />
            </div>
         </div>
      </section>
   );
};

export default Highlights;
