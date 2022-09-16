import React from "react";
import { twMerge } from "tailwind-merge";

function Input(props) {
  const {
    placeholder,
    type,
    mainClass,
    id,
    icon,
    inputClass,
  } = props;
  return (
    <div
      className={mainClass}
    >
      {icon}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={twMerge(
          `transition-all w-full py-2 px-3 focus:outline-none ${inputClass}`
        )}
      />
    </div>
  );
}

export default Input;
