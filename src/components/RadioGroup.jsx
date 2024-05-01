import React from "react";
import { RadioButton } from "./";
const RadioGroup = ({selected, handler}) => {
  return (
    <div
      role="radiogroup"
      aria-required="false"
      dir="ltr"
      class="w-full laptopSm:max-w-[590px] flex flex-wrap gap-6 outline-none"
      aria-label="View density"
      tabindex="0"
    >
      <RadioButton
        label="Full Stack Developer"
        value={"full-stack-developer"}
        selected={selected}
        handler={handler}
      />
      <RadioButton
        label="Front End Developer"
        value={"front-end-developer"}
        selected={selected}
        handler={handler}
      />
      <RadioButton
        label="Business Development Manager"
        value={"business-manager"}
        selected={selected}
        handler={handler}
      />
      <RadioButton
        label="Lead Product Designer"
        value={"lead-product-designer"}
        selected={selected}
        handler={handler}
      />
    </div>
  );
};

export default RadioGroup;
