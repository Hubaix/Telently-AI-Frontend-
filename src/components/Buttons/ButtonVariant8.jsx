import React from "react";

const ButtonVariant8 = ({ handler, children }) => {
  return (
    <button class="w-full mobileSm:min-w-[193px] border flex-1 min-h-[50px] items-center justify-center rounded-lg bg-transparent p-2 text-center text-sm text-[#312A50]"
      onClick={handler}
    >
      {children}
    </button>
  );
};

export default ButtonVariant8;
