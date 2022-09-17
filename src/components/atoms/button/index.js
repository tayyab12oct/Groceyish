import React from "react";
import { twMerge } from "tailwind-merge";

function Button({ value, className, icon, ...props }) {
  return (
    <button
      {...props}
      className={twMerge(
        `bg-primary-100 flex items-center justify-center px-4 py-2 text-white focus:outline-none ${className}`
      )}
    > {icon}
      {value}
    </button>
  );
}

export default Button;
