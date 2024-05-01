import React from "react";

const ButtonVariant5 = ({handler, children}) => {
  return (
    <button
      class="h-[34px] max-w-[273px] rounded border text-[#445E7C] text-xs border-[#445E7C]/5 bg-[#445E7C05]"
      type="button"
      onClick={handler}
    >
      {children}
    </button>
  );
};

export default ButtonVariant5;
