import React from "react";

const EndInterview = ({ isOpen, onClose, setValue }) => {
  return (
    <>
      {isOpen && (
        <div
          id="backdrop"
          className="modal-container fixed top-0 bottom-0 left-0 right-0 w-full h-full z-50 bg-[#fffffcc] flex justify-center items-center backdrop-blur-md p-8"
          onClick={onClose}
        >
          <div className="modal-dialog !max-w-[550px] !w-full bg-white !border-0 rounded-[10px] p-12 !shadow-3xl">
            <div className="mb-5">
              <h2 className="font-bold text-[27px] text-[#312A50] text-center leading-[134%] mb-2">
                Do you want to end your interview?
              </h2>
              <p className="avenir-normal text-[#312A50B8] text-center leading-[150%] mb-2">
                This will finish your interview. You cannot return to it later.
              </p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <button
                type="button"
                className="flex sm:w-auto w-full min-h-[50px] pl-4 pr-4  items-center justify-center rounded-lg bg-[#6F6D78] p-2 text-center text-sm capitalize text-[#ffffff] hover:bg-[#49474E] focus:bg-violet-700 disabled:bg-slate-400"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="button"
                className="flex sm:w-auto w-full min-h-[50px] pl-4 pr-4 items-center justify-center rounded-lg bg-[#E54666] p-2 text-center text-sm capitalize text-[#ffffff] hover:bg-[#B3445A] focus:bg-violet-700 disabled:bg-slate-400"
                onClick={setValue}
              >
                Stop Interview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EndInterview;
