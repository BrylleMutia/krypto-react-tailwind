import React from "react";

const Button = ({ styles, text }) => {
   return (
      <button
         className={`${styles} rounded-full uppercase md:px-12 px-6 md:py-3.5 py-2 text-button`}
      >
         {text}
      </button>
   );
};

export default Button;
