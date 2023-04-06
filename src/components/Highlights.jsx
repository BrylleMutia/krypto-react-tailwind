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
            }`}
         >
            <img src={`../src/assets/${img}.png`} alt="title" />
            <div>
               <h2 className={styles.heading2}>{title}</h2>
               <h1 className={`${styles.heading1} capitalize`}>{header}</h1>
               <p className="text-p">{paragraph}</p>
               <Button text={buttonText} styles="bg-secondary" />
            </div>
         </div>
      </section>
   );
};

export default Highlights;
