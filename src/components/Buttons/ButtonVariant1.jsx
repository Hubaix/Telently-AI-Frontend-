import React from "react";

const ButtonVariant1 = ({ handler }) => {
  return (
    <button
      id="book-demo-Basic"
      className="flex items-center justify-center text-base leading-[100%] text-[#0068EC] px-10 py-4 min-w-[184px] min-h-[51px] border border-solid border-[#0068EC] rounded-[100px] transition-all bg-transparent hover:text-[#445E7C] focus:text-[#445E7C] hover:border-[#E6F7FC] focus:border-[#E6F7FC] hover:bg-[#E6F7FC] focus:bg-[#E6F7FC]"
      onClick={handler}
    >
      Book a Call
    </button>
  );
};

export default ButtonVariant1;
