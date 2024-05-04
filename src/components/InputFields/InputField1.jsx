import React from "react";

const InputField1 = ({
  placeholder,
  name,
  value,
  handler,
  errorMessage,
  label,
  type = "text",
}) => {
  return (
    <>
      <label
        class=" text-sm text-[#312A50] leading-[134%] font-semibold mb-0 flex flex-col"
        data-state="closed"
      >
        <span class="mb-1 leading-[150%]">{label}</span>
        {errorMessage && (
          <span class="text-xs text-red-500">{errorMessage}</span>
        )}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        class="h-[56px] w-full rounded-[3px] border border-[#65656533] px-[26px] py-2 outline-none placeholder-[#312A50B3]  mt-[10px] bg-white text-[#312A50] focus:border-[#7B61FF]"
        name={name}
        value={value}
        onChange={handler}
      />
    </>
  );
};

export default InputField1;
