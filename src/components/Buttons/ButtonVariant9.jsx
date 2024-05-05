import React, { Children } from "react";

const ButtonVariant9 = ({handler, children}) => {
  return (
    <button 
        class="flex justify-center items-center gap-2 bg-transparent text-white text-xs border-white border-opacity-[0.08] border-[1px] pt-3 pb-3 pl-3 pr-3 rounded-md"
        onClick={handler}    
    >
      {children}
    </button>
  );
};

export default ButtonVariant9;
