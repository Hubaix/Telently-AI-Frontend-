import React from "react";
import { DescriptionIcon } from "../assets/icons";

const CheckBox = ({ label, name, isDescription=false }) => {
  return (
    <div class="relative mt-4 text-sm text-[#5C5C5C] font-thin">
      {isDescription && (
        <div class="relative">
          <div class="absolute -left-5 top-[2px] cursor-pointer">
            <DescriptionIcon />
          </div>
        </div>
      )}
      <label class="flex items-center">
        <input
          class="mr-3"
          type="checkbox"
          name="allow_data_share"
        />
        <p>{label}</p>
      </label>
    </div>
  );
};

export default CheckBox;
