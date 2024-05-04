import React from "react";
import { ProcessingIcon } from "../../assets/icons";

const Processing = ({ isOpen }) => {
  return (
    <>
      {isOpen && (
        <div
          id="backdrop"
          class="modal-container fixed top-0 bottom-0 left-0 right-0 w-full h-full z-50 bg-[#fffffcc] flex justify-center items-center backdrop-blur-md p-8"
        >
          <div class="modal-dialog !max-w-[680px] !w-full h-auto min-h-[600px] !max-h-[600px] !border-0 rounded-[10px] p-4 md:p-12 !shadow-3xl bg-job-processing bg-cover bg-no-repeat flex justify-center items-center bg-black">
            <div class="flex flex-col min-h-[400px] w-full justify-between mt-12">
              <h2 class="font-bold text-2xl text-white text-center leading-[134%] mb-2 font-sofia">
                Processing your Questions
              </h2>
              <div>
                <p class="font-avenir text-sm text-white/70 text-center">
                  Hang in there, this might take a few seconds
                </p>
                <div class="mx-auto w-fit my-4">
                  <ProcessingIcon/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Processing;
