import React from "react";
import { ButtonVariant3 } from "./";

const Tabs = ({ tabs, selectedTab, changeHandler, type }) => {
  return (
    <div className="flex justify-center gap-2 bg-[#f3f4f6] rounded-[100px] p-1 w-full sm:w-auto overflow-x-auto">
      {tabs.map((tab) => (
        <ButtonVariant3
          key={tab.id}
          selectedTab={selectedTab}
          value={tab.value}
          type={type}
          handler={() => changeHandler(tab.value)}
        >
          {tab.text}
        </ButtonVariant3>
      ))}
    </div>
  );
};

export default Tabs;
