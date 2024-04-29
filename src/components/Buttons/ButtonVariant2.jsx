import React from "react";

const ButtonVariant2 = ({ handler }) => {
  return (
    <button
      id="book-demo"
      className="lex items-center justify-center text-base leading-[100%] text-[#F9FAFB] px-10 py-4 min-w-[184px] min-h-[51px] border-0 rounded-[100px] transition-all bg-gradient-skyblue hover:text-white focus:text-white hover:bg-gradient-skyblue-2 focus:bg-gradient-skyblue-2"
      onClick={handler}
    >
      Book a Call
    </button>
  );
};

export default ButtonVariant2;
