import React from "react";

const ButtonVariant4 = ({ handler, children }) => {
  return (
    <button
      type="submit"
      class="flex items-center justify-center min-h-[48px] w-full rounded-[3px] py-2 px-7 leading-[100%] font-medium text-center text-sm text-white bg-gradient-0068EC-00BBF9-21-73 hover:bg-gradient-0068EC-00BBF9-21-76 focus:bg-gradient-0068EC-00BBF9-21-76 disabled:bg-none disabled:bg-[#D9D9D9] disabled:text-[#F9FAFB] transition-all"
      onClick={handler}
    >
      {children}
    </button>
  );
};

export default ButtonVariant4;
