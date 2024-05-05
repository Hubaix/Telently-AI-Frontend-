import React, { useState } from "react";
import "../style/InterviewDisplay.css";
import { TimerClockIcon } from "../assets/icons";
import { ButtonVariant9 } from "../components";
import { ShareScreenModal, EndInterviewModal } from "../sections";

const InterviewDisplay = () => {

  const [isNotScreenSharing, setIsNotScreenSharing] = useState(false);
  const [showEndInterviewModal, setShowEndInterviewModal] = useState(true);
  const[isEndInterview, setIsEndInterview] = useState(false);

  return (
    <div class="w-full min-h-screen overflow-hidden flex flex-col flex-grow overflow-y-auto overflow-x-hidden justify-center items-center bg-[#131224]">
      <div class="w-[90vw] h-[90vh]">
        <div class="flex flex-row w-full h-full gap-[54px]">
          <div class="flex-1 basis-[844px] flex-col flex">
            <div class="flex-1 flex flex-col bg-white/[.03] rounded-lg pt-[29px] pb-[38px] pl-[40px] pr-[40px]">
              <div class="flex items-center justify-between">
                <div>
                  <div class="w-fit h-fit border bg-[#138954] border-[#D0D5DD] rounded-md items-center pt-0.5 pb-1 gap-2 px-3 hidden">
                    <div class="relative flex items-center justify-center rounded-full w-4 h-4 border border-white">
                      <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                      </span>
                    </div>
                    <p class="font-xs font-sofia text-white mt-[4px]">REC</p>
                  </div>
                </div>
                <div class="flex flex-row-reverse">
                  <p class="text-base  m-0 flex items-center avenir-normal flex-shrink-0">
                    <span class="flex items-center justify-center mr-3 flex-shrink-0 w-[26px] h-[26px]">
                      <TimerClockIcon />
                    </span>
                    <span class="text-white">00:00</span>
                  </p>
                </div>
              </div>
              <div class="flex flex-col gap-3 mt-12 mb-10 h-96 xl:flex-row">
                <button
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:r1l:"
                  data-state="closed"
                ></button>
                <div class="bg-gradient-bot flex-1 flex justify-center items-center absolute bottom-0 right-0 z-[1] w-[34px] h-[34px] p-[7px] rounded-[3px]">
                  <div class="chat1 rounded-full bg-slate-200 w-[43px] h-[43px] bg-transparent border-2 border-gray-500 absolute ml-auto mr-auto"></div>
                  <div class="rounded-full bg-white/[.10] flex justify-center items-center">
                    <img
                      alt=""
                      loading="lazy"
                      width="18"
                      height="18"
                      decoding="async"
                      data-nimg="1"
                      class="rounded-full chat-img"
                      src="/images/bot-update.svg"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:r1o:"
                  data-state="closed"
                ></button>
                <div class="bg-[#212031] rounded flex-1 flex justify-center items-center relative overflow-hidden">
                  <div class="overflow-hidden">
                    <video
                      autoplay=""
                      playsinline=""
                      className="chat-video"
                    ></video>
                  </div>
                </div>
              </div>
              <div class="mt-auto flex justify-center items-center gap-4"></div>
            </div>
            <div class="flex items-center justify-center mt-7">
              <div class="w-2"></div>
              <ButtonVariant9>Start Interview</ButtonVariant9>
            </div>
          </div>
          <div
            dir="ltr"
            class="chat2 flex-1 basis-[400px] shrink-0 flex flex-nowrap gap-8 flex-col justify-start mb-7"
          >
            <div data-radix-scroll-area-viewport="" className="chat3">
              <div className="chat4">
                <div class="flex flex-col justify-start gap-8 pr-3">
                  <p class="text-white">
                    Click Start Interview to get started. You must share your
                    entire screen to attempt the interview. This is to prevent
                    plagiarism during the interview.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Screen Sharing Modal */}
        <ShareScreenModal
          isOpen={isNotScreenSharing}
          onClose={() => setIsNotScreenSharing(false)}
        />

        {/* End Interview Modal */}
        <EndInterviewModal
          isOpen={showEndInterviewModal}
          onClose={() => setShowEndInterviewModal(false)}
          setValues={() => setIsEndInterview(true)}
        />

      </div>
    </div>
  );
};

export default InterviewDisplay;
