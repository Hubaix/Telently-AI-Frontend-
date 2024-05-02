import React from "react";

const ButtonVariant7 = ({ handler, children }) => {
  return (
    <button
      class="flex sm:w-auto w-full min-h-[50px] items-center justify-center rounded-lg bg-[#7A3FF3] p-2 px-20 text-center text-sm text-[#ffffff] hover:bg-violet-700 focus:bg-violet-700 disabled:bg-slate-400 mobileSm:min-w-[193px]"
      onClick={handler}
    >
      {children}
    </button>
  );
};

export default ButtonVariant7;
