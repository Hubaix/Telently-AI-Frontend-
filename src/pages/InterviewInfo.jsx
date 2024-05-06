import React, { useState, useEffect, useRef } from "react";
import "../style/interviewInfo.css";
import { useNavigate } from "react-router-dom";
import { ComputerIcon, OpenMicIcon, OpenVideoIcon, CloseMicIcon, CloseVideIcon } from "../assets/icons";
import { ButtonVariant7, InputField1 } from "../components";
import { ProcessingModal } from "../sections";

const InterviewInfo = () => {

  const [isProcessing, setIsProcessing] = useState(false);
  const [data, setData] = useState({ name: "", email: "" });
  const [error, setError] = useState({ name: "", email: "" });
  const [isTouch, setIsTouch] = useState({ name: false, email: false });
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMicroPhoneOn, setIsMicroPhoneOn] = useState(true);
  
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    if (isTouch.name) {
      if (data.name === "") {
        setError((prev) => ({
          ...prev,
          name: "* required",
        }));
      } else {
        setError((prev) => ({
          ...prev,
          name: "",
        }));
      }
    }

    if (isTouch.email) {
      if (data.email === "") {
        setError((prev) => ({
          ...prev,
          email: "* required",
        }));
      } else {
        setError((prev) => ({
          ...prev,
          email: "",
        }));
      }
    }
  }, [data]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

    setIsTouch((prev) => ({
      ...prev,
      [e.target.name]: true,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // off the processing modal after 5 seconds
    setTimeout(() => {
      setIsProcessing(false);
      navigate("/mock-interview/interview")
    }, 5000);

  };

  useEffect(() => {
    let stream = null;
    if (videoRef.current) {
      navigator.mediaDevices.getUserMedia({ video: isVideoOn })
        .then((mediaStream) => {
          videoRef.current.srcObject = mediaStream;
          stream = mediaStream;
        })
        .catch((error) => {
          console.error('Error accessing camera:', error);
          videoRef.current.srcObject = null
        });
    }
  
    // Cleanup function
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [isVideoOn]);

  return (
    <>
      <div
        class="flex gap-8 justify-center flex-col h-screen"
        data-hs-cf-bound="true"
      >
        <div class="flex gap-8 justify-center px-[75px] flex-col md:flex-row w-full">
          <div class="relative w-full md:w-1/2 min-h-[502px] rounded-md bg-[#131224] overflow-hidden flex flex-col align-middle items-center justify-center">
            <div>
              <div class="overflow-hidden">
                <video
                  ref={videoRef}
                  autoplay=""
                  playsinline=""
                  className="interview-video"
                ></video>
              </div>
            </div>
            <div class="absolute pb-2 mx-auto text-white bottom-2">
              <div class="flex gap-2">
                <div class="[&amp;_svg]:h-[50px] [&amp;_svg]:w-[50px] cursor-pointer" onClick={() => setIsMicroPhoneOn(!isMicroPhoneOn)}>
                  {isMicroPhoneOn ? <OpenMicIcon /> : <CloseMicIcon/> }
                </div>
                <div class="[&amp;_svg]:h-[50px] [&amp;_svg]:w-[50px] cursor-pointer" onClick={() => setIsVideoOn(!isVideoOn)}>
                  {isVideoOn ? <OpenVideoIcon /> : <CloseVideIcon/>}
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 min-h-[502px] rounded-md relative bg-violet-500 bg-opacity-0 shadow border border-violet-500 py-10 px-10 md:px-4 lg:px-10">
            <ComputerIcon />
            <p class="text-center text-slate-700 text-opacity-70 text-sm font-normal font-avenir leading-[21px] mt-4 mb-8">
              We will email your detailed interview results after you finish
              your interview.
            </p>
            <div class="px-4 py-2 mt-4 rounded-md">
              <div class="mb-7">
                <InputField1
                  label={"Name"}
                  name={"name"}
                  placeholder={"Jon Alexander"}
                  value={data.name}
                  handler={handleChange}
                  errorMessage={error.name}
                />
              </div>
              <div class="mb-8">
                <InputField1
                  label={"Email"}
                  name={"email"}
                  placeholder={"Enter your email here"}
                  value={data.email}
                  handler={handleChange}
                  errorMessage={error.email}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex mx-auto flex-col gap-2">
          <div class="flex justify-start items-center gap-4 mx-auto min-h-[48px]">
            <ButtonVariant7 handler={handleSubmit}>
              Start interview
            </ButtonVariant7>
          </div>
        </div>
      </div>

      {/* Processing Modal */}
      <ProcessingModal isOpen={isProcessing}/>

    </>
  );
};

export default InterviewInfo;
