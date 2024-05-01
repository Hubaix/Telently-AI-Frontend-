import React from "react";

const ButtonVariant6 = ({ handler, children }) => {
  return (
    <button
      type="button"
      class="border border-[#445E7C]/5 bg-[#7B61FF] px-[22.27px] text-white text-xs rounded h-[48px] max-w-[305px] mx-auto"
      onClick={handler}
    >
      {children}
    </button>
  );
};

export default ButtonVariant6;
