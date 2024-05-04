import React from "react";

const Computer = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      viewBox="0 0 36 36"
      class="mx-auto"
    >
      <path fill="#1E1E1E" d="M0 0h36v36H0z"></path>
      <path fill="#fff" d="M-1019-243H421v835h-1440z"></path>
      <g filter="url(#a)">
        <rect
          width="616"
          height="460"
          x="-285"
          y="-44"
          fill="#7B61FF"
          fill-opacity="0.02"
          rx="10"
          shape-rendering="crispEdges"
        ></rect>
        <rect
          width="615"
          height="459"
          x="-284.5"
          y="-43.5"
          stroke="#7B61FF"
          rx="9.5"
          shape-rendering="crispEdges"
        ></rect>
        <path
          fill="#7B61FF"
          d="M10.125 9a3.375 3.375 0 0 0-3.375 3.375v9a3.375 3.375 0 0 0 3.375 3.375h15.75a3.375 3.375 0 0 0 3.375-3.375v-9A3.375 3.375 0 0 0 25.875 9h-15.75ZM9 12.375a1.125 1.125 0 0 1 1.125-1.125h15.75A1.125 1.125 0 0 1 27 12.375v9a1.125 1.125 0 0 1-1.125 1.125h-15.75A1.125 1.125 0 0 1 9 21.375v-9ZM5.625 27a1.125 1.125 0 1 0 0 2.25h24.75a1.125 1.125 0 1 0 0-2.25H5.625Z"
        ></path>
      </g>
      <defs>
        <filter
          id="a"
          width="714"
          height="558"
          x="-334"
          y="-77"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="16"></feOffset>
          <feGaussianBlur stdDeviation="24.5"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.85 0 0 0 0 0.85 0 0 0 0 0.85 0 0 0 0.2 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_192_824"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_192_824"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
};

export default Computer;
