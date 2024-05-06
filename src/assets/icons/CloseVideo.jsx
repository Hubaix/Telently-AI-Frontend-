import React from "react";

const CloseVideo = () => {
  return (
    <div class="fillOpacityOne [&amp;_circle]:!fill-[red]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        fill="none"
        viewBox="0 0 34 33"
      >
        <g filter="url(#a)">
          <circle
            cx="16.768"
            cy="16.501"
            r="16.442"
            fill="#000"
            fill-opacity="0.52"
          ></circle>
        </g>
        <path
          fill="#fff"
          d="M12.807 21.296a.801.801 0 0 1-.585-.25.801.801 0 0 1-.25-.585v-7.236c0-.222.083-.417.25-.584a.801.801 0 0 1 .585-.25h7.236c.223 0 .418.083.585.25.166.167.25.362.25.584v2.992l2.227-2.226v5.705l-2.227-2.227v2.992a.801.801 0 0 1-.25.585.801.801 0 0 1-.585.25h-7.236Z"
        ></path>
        <path stroke="#0D0C15" d="m21 10-9 14"></path>
        <defs>
          <filter
            id="a"
            width="87.691"
            height="87.691"
            x="-27.077"
            y="-27.345"
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
              result="effect1_backgroundBlur_1_148"
            ></feComposite>
            <feBlend
              in="SourceGraphic"
              in2="effect1_backgroundBlur_1_148"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default CloseVideo;
