import React, { useState, useEffect, useRef } from "react";
import "../style/InterviewDisplay.css";
import { useNavigate } from "react-router-dom";
import Typist from 'react-typist';
import { TimerClockIcon, StopVideoIcon } from "../assets/icons";
import { Bot } from "../assets/images";
import { ButtonVariant9 } from "../components";
import { ShareScreenModal, EndInterviewModal } from "../sections";
import { formatTime } from "../utils";
import { InterviewQuestions } from "../Content";

const InterviewDisplay = () => {
  const [isNotScreenSharing, setIsNotScreenSharing] = useState(false);
  const [showEndInterviewModal, setShowEndInterviewModal] = useState(false);
  const [isEndInterview, setIsEndInterview] = useState(false);
  const [isStartInterview, setIsStartInterview] = useState(false);
  const [timer, setTimer] = useState(0);
  const [stream, setStream] = useState(null);

  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    if (isEndInterview) {
      stopScreenSharing();
      navigate("complete");
    }
  }, [isEndInterview]);

  useEffect(() => {
    let interval;
    if (isStartInterview) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isStartInterview]);

  useEffect(() => {
    let stream = null;
    if (videoRef.current) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((mediaStream) => {
          videoRef.current.srcObject = mediaStream;
          stream = mediaStream;
        })
        .catch((error) => {
          console.error('Error accessing camera:', error);
        });
    }
  
    // Cleanup function
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    if(stream){ setIsStartInterview(true); }
  }, [stream])


  const startScreenSharing = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      setStream(stream);
    } catch (error) {
      console.error('Error accessing screen capture:', error);
      setIsNotScreenSharing(true);
    }
  };

  const stopScreenSharing = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  return (
    <div className="w-full min-h-screen overflow-hidden flex flex-col flex-grow overflow-y-auto overflow-x-hidden justify-center items-center bg-[#131224]">
      <div className="w-[90vw] h-[90vh]">
        <div className="flex flex-row w-full h-full gap-[54px]">
          <div className="flex-1 basis-[844px] flex-col flex">
            <div className="flex-1 flex flex-col bg-white/[.03] rounded-lg pt-[29px] pb-[38px] pl-[40px] pr-[40px]">
              <div className="flex items-center justify-between">
                <div>
                  {isStartInterview && (
                    <div className="w-fit h-fit border bg-[#138954] border-[#D0D5DD] rounded-md items-center pt-0.5 pb-1 gap-2 px-3 flex">
                      <div className="relative flex items-center justify-center rounded-full w-4 h-4 border border-white">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                        </span>
                      </div>
                      <p className="font-xs font-sofia text-white mt-[4px]">
                        REC
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex flex-row-reverse">
                  <p className="text-base  m-0 flex items-center avenir-normal flex-shrink-0">
                    <span className="flex items-center justify-center mr-3 flex-shrink-0 w-[26px] h-[26px]">
                      <TimerClockIcon />
                    </span>
                    <span className="text-white">{formatTime(timer)}</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-12 mb-10 h-96 xl:flex-row">
                <button
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:r1l:"
                  data-state="closed"
                ></button>
                <div className="bg-gradient-bot flex-1 flex justify-center items-center absolute bottom-0 right-0 z-[1] w-[34px] h-[34px] p-[7px] rounded-[3px]">
                  <div className="chat1 rounded-full bg-slate-200 w-[43px] h-[43px] bg-transparent border-2 border-gray-500 absolute ml-auto mr-auto"></div>
                </div>
                <button
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:r1o:"
                  data-state="closed"
                ></button>
                <div className="bg-[#212031] rounded flex-1 flex justify-center items-center relative overflow-hidden">
                  <div className="overflow-hidden">
                    <video
                      ref={videoRef}
                      autoplay=""
                      playsinline=""
                      className="chat-video"
                    ></video>
                  </div>
                </div>
              </div>
              {isStartInterview && (
                <div className="mt-auto flex justify-center items-center gap-4">
                  <button
                    className="px-4 py-2 inline-flex items-center border-[2px] rounded-lg border-white border-opacity-5 cursor-pointer hover:bg-slate-50 hover:bg-opacity-10"
                    data-state="closed"
                    onClick={() => setShowEndInterviewModal(true)}
                  >
                    <StopVideoIcon />
                    <span className="text-white pl-4">Stop Interview</span>
                  </button>
                </div>
              )}
            </div>
            {!isStartInterview && (
              <div className="flex items-center justify-center mt-7">
                <div className="w-2"></div>
                <ButtonVariant9 handler={() => {
                    // setIsStartInterview(true)
                    startScreenSharing();
                  }}>
                  Start Interview
                </ButtonVariant9>
              </div>
            )}
          </div>
          <div
            dir="ltr"
            className="chat2 flex-1 basis-[400px] shrink-0 flex flex-nowrap gap-8 flex-col justify-start mb-7"
          >
            <div data-radix-scroll-area-viewport="" className="chat3">
              <div className="chat4">
                <div className="flex flex-col justify-start gap-8 pr-3">
                
                  {isStartInterview &&
                    InterviewQuestions?.map((question) => (
                      <React.Fragment key={question.id}>
                        <div class="flex text-white ">
                          <div class="shrink-0 mr-2 flex flex-col items-center gap-3">
                            <div class="chatbot1 rounded-full text-white bg-slate-500 flex justify-center items-center">
                              <img
                                alt="Interview Bot's Avatar"
                                loading="lazy"
                                width="35"
                                height="35"
                                decoding="async"
                                data-nimg="1"
                                className="image-transparent"
                                src={Bot}
                              />
                            </div>
                          </div>
                          <div class="w-11/12  break-words">
                            <div class="text-xs">Interview Bot</div>
                            <div class="text-sm">{question.question}</div>
                          </div>
                        </div>
                        
                        <div class="flex text-white ">
                          <div class="shrink-0 mr-2 flex flex-col items-center gap-3">
                            <div class="chatbot1 rounded-full text-white bg-slate-500 flex justify-center items-center">
                              <span class="pt-[3px] text-sm">U</span>
                            </div>
                            <div class="flex text-white">
                              <div class="shrink-0 mr-2 flex flex-col items-center gap-3">
                                <canvas
                                  width="40"
                                  height="25"
                                  className="user-icon"
                                ></canvas>
                              </div>
                            </div>
                          </div>
                          <div class="w-11/12  break-words">
                            <div class="text-xs">Muhammad</div>
                            
                            <div class="text-sm"><Typist>{question.answer}</Typist></div>
                          </div>
                        </div>
                        
                      </React.Fragment>
                    ))}

                  {!isStartInterview && (
                    <p className="text-white">
                      Click Start Interview to get started. You must share your
                      entire screen to attempt the interview. This is to prevent
                      plagiarism during the interview.
                    </p>
                  )}
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
          setValue={() => setIsEndInterview(true)}
        />
      </div>
    </div>
  );
};

export default InterviewDisplay;
