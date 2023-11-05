import React from "react";

const Rectangle = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 569 902"
        fill="none"
      >
        <g filter="url(#filter0_f_2_40)">
          <rect
            x="58.4624"
            y="177"
            width="471.587"
            height="471.587"
            rx="32"
            transform="rotate(45 58.4624 177)"
            fill="url(#paint0_linear_2_40)"
            fillOpacity="0.2"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_2_40"
            x="-451.745"
            y="0.254837"
            width="1020.42"
            height="1020.42"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="95"
              result="effect1_foregroundBlur_2_40"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2_40"
            x1="241.591"
            y1="360.764"
            x2="294.256"
            y2="648.587"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EC3A09" />
            <stop offset="1" stopColor="#EC0909" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Rectangle;
