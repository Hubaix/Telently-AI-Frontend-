import React from "react";

const OpenMic = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      fill="none"
      viewBox="0 0 64 64"
    >
      <g filter="url(#a)">
        <circle cx="32" cy="32" r="32" fill="#000" fill-opacity="0.52"></circle>
      </g>
      <path
        fill="#fff"
        d="M33.329 20a5 5 0 0 0-5 5v7a5 5 0 1 0 10 0v-7a5 5 0 0 0-5-5Zm-8 11a1 1 0 0 1 1 1 7 7 0 1 0 14 0 1 1 0 0 1 2 0 9 9 0 0 1-8 8.946V43a1 1 0 1 1-2 0v-2.054a9 9 0 0 1-8-8.946 1 1 0 0 1 1-1Z"
      ></path>
      <defs>
        <filter
          id="a"
          width="118.807"
          height="118.807"
          x="-27.403"
          y="-27.403"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImageFix"
            stdDeviation="13.702"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1144_852"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1144_852"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
};

export default OpenMic;
