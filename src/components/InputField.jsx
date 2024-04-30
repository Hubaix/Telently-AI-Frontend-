import React from "react";

const InputField = ({
  label,
  placeholder,
  name,
  type = "text",
  value,
  handleChange,
}) => {
  return (
    <div class="flex flex-col">
      <label class="text-[#263238] font-medium text-sm leading-[150%] mb-1">
        {label}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleChange}
        class="h-[45px] w-full rounded-[2px] border-[0.85px] border-[#e8e8e8] bg-white px-[17px] py-3 text-[#263238] text-xs outline-none font-normal leading-[150%] focus:border focus:border-[#263238] placeholder-[#BBBBBB] transition-all"
        name={name}
      />
    </div>
  );
};

export default InputField;
