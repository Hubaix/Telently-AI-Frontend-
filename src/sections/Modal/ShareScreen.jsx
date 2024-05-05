import React from "react";
import { ButtonVariant7 } from "../../components";

const ShareScreen = ({isOpen, onClose}) => {
  return (
    <>
        {isOpen && (
            <div
            id="backdrop"
            class="modal-container fixed top-0 bottom-0 left-0 right-0 w-full h-full z-50 bg-[#fffffcc] flex justify-center items-center backdrop-blur-md p-8"
          >
            <div class="modal-dialog !max-w-[550px] !w-full bg-white !border-0 rounded-[10px] p-12 !shadow-3xl">
              <h2 class="font-bold text-[27px] text-[#312A50] text-center leading-[134%] mb-2 ">
                Please share your Entire Screen{" "}
              </h2>
              <p class="avenir-normal text-[#312A50B8] text-center leading-[150%] mb-7">
                Please select "Entire Screen" option when sharing your screen. We need
                to share your Entire Screen for proctoring purposes.
              </p>
              <div class="flex justify-center">
                <ButtonVariant7 handler={onClose}>Understood</ButtonVariant7>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default ShareScreen;
