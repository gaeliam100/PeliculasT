import React, { ReactNode } from "react";

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  icon?: ReactNode;
  disabled?: boolean;
  name?: string;
  type: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  name,
  icon,
  type,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      name={name}
      type={type}
      disabled={disabled}
      title="Go to about me page"
      className="
          w-full 
          justify-center 
          items-center 
          cursor-pointer 
          gap-x-4 
          hover:text-black 
          border 
          flex 
          rounded-md
          mr-4 
          last-of-type:mr-0 
          p-2.5 
          border-gray-600/10 
          hover:bg-gray-200/10
          focus:opacity-100 
          focus:outline-none 
          font-medium 
          text-sm 
          text-center
          active:scale-95
          "
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
