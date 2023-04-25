import React from "react";

const Button = ({ styles, text }) => {
   return (
      <button
         className={`font-outfit font-semibold rounded-full tracking-wider uppercase md:px-12 px-6 md:py-3.5 py-2 text-button ${styles}`}
      >
         {text}
      </button>
   );
};

export default Button;
