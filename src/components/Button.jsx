import React from "react";

const Button = ({ styles, text, adaptive = true, ...props }) => {
   return (
      <button
         className={`font-outfit font-semibold rounded-full tracking-wider uppercase px-6 py-2 ${
            adaptive && "md:px-12 md:py-3.5 text-button"
         } ${styles}`}
         {...props}
      >
         {text}
      </button>
   );
};

export default Button;
