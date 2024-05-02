import React, { useState } from "react";
import { MainMenu, SelectedInterview, CustomInterview } from "../sections";

const MockInterview = () => {
  const [isCustom, setIsCustom] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleRadioButtonChange = (value) => {
    setSelected(value);
  };

  const handleCustomInterview = (value) => {
    setIsCustom(value);
  };

  return (
    <div class="grid w-full min-h-screen grid-rows-[0.5fr_1fr] laptopSm:grid-rows-1 register-grid laptopSm:h-screen laptopSm:min-h-full">
      <div class="bg-black laptopSm:h-full">
        <div class="flex-grow flex laptopSm:flex mock_bg_banner h-full !p-9"></div>
      </div>
      <div class="flex flex-col flex-grow overflow-x-hidden overflow-y-auto no-scrollbar">
        <div class="relative laptopSm:max-w-[600px] mx-auto w-full px-8 sm:pr-16 sm:pl-10 laptopSm:min-h-screen sm:pt-16 sm:pb-10 py-8 flex flex-col">
          {/* Menu (page 1) */}
          {!selected && !isCustom && (
            <MainMenu
              radioHandler={handleRadioButtonChange}
              btnHandler={handleCustomInterview}
            />
          )}

          {/* Custom Data for interview */}
          {isCustom && (
            <CustomInterview
              radioHandler={handleRadioButtonChange}
              customHandler={handleCustomInterview}
            />
          )}

          {/* Selected Interview data (page 2) */}
          {!isCustom && selected && (
            <SelectedInterview
              selected={selected}
              radioHandler={handleRadioButtonChange}
              customHandler={() => handleCustomInterview(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MockInterview;
