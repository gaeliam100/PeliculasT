import React from "react";

const CheckBox = ({ label, isSelected, onCheckboxChange,name }:CheckBoxProps) => (
    <div className="flex items-center">
<div className="">
  <label className="text-black flex justify-center items-center">
    <input
    name={name}
    checked={isSelected}
    onChange={onCheckboxChange} 
    className="transition-all duration-500 ease-in-out w-10 h-6" type="checkbox"/>
    {label}
  </label>
</div>
    </div>
  );
  interface CheckBoxProps{
    label?:string;
    isSelected?:boolean;
    onCheckboxChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    name?:string;
  }
  export default CheckBox;