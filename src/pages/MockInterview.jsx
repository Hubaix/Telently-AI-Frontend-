import React from "react";
import { Outlet } from "react-router-dom";
const MockInterview = () => {
  return (
    <div class="grid w-full min-h-screen grid-rows-[0.5fr_1fr] laptopSm:grid-rows-1 register-grid laptopSm:h-screen laptopSm:min-h-full">
      <div class="bg-black laptopSm:h-full">
        <div class="flex-grow flex laptopSm:flex mock_bg_banner h-full !p-9"></div>
      </div>
      <div class="flex flex-col flex-grow overflow-x-hidden overflow-y-auto no-scrollbar">
        <div class="relative laptopSm:max-w-[600px] mx-auto w-full px-8 sm:pr-16 sm:pl-10 laptopSm:min-h-screen sm:pt-16 sm:pb-10 py-8 flex flex-col">
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MockInterview;
