import React from "react";

const Button = ({ styles, text }) => {
   return (
      <button className={`${styles} rounded-full uppercase px-12 py-3.5`}>
         {text}
      </button>
   );
};

export default Button;
