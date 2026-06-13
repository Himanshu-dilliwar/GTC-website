import React from "react";

type Props = {
  text: string;
};

const VerticalAlignedText = ({ text }: Props) => {
  return (
    <div className="font-aero bg-fixed h-screen p-20 text-center text-6xl text-white flex flex-col items-center relative justify-center">
      {Array.from(text)
        .reverse()
        .map((letter, id) => (
          <div key={id} className="-rotate-90">
            <div
              className={`rotate-90 left-0 ${id === 0 ? "absolute" : null} left-0 bottom-0 `}
            >
              {id === 0 ? <Up_svg /> : null}
            </div>
            {letter}
            <span
              className={`rotate-90 ${id === text.length - 1 ? "absolute" : null} top-0 right-0`}
            >
              {id === text.length - 1 ? <Down_svg /> : null}
            </span>
          </div>
        ))}
    </div>
  );
};

export default VerticalAlignedText;

const Down_svg = () => (
  <svg
    width="48"
    height="84"
    viewBox="0 0 48 84"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="34"
      cy="6"
      r="5.5"
      transform="rotate(180 34 6)"
      stroke="#FF0B17"
    />
    <circle
      cx="34"
      cy="38"
      r="5.5"
      transform="rotate(180 34 38)"
      stroke="#FF0B17"
    />
    <g filter="url(#filter0_f_76_58)">
      <circle
        cx="34"
        cy="70"
        r="6"
        transform="rotate(180 34 70)"
        fill="#FF0B17"
      />
    </g>
    <circle
      cx="34"
      cy="70"
      r="6"
      transform="rotate(180 34 70)"
      fill="#FF0B17"
    />
    <path
      d="M8.636 76H2.295L0.68 73.875V66.276L2.312 64.1H8.619L10.268 66.276V73.875L8.636 76ZM9.367 66.582L8.177 65.001H2.737L1.564 66.582V73.535L2.754 75.082H8.177L9.367 73.535V66.582ZM14.9354 76V65.001H13.7794L12.5384 65.868V66.769H11.6204V65.426L13.4734 64.083H15.8534V76H14.9354Z"
      fill="white"
    />
    <defs>
      <filter
        id="filter0_f_76_58"
        x="20.4"
        y="56.4"
        width="27.2"
        height="27.2"
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
          stdDeviation="3.8"
          result="effect1_foregroundBlur_76_58"
        />
      </filter>
    </defs>
  </svg>
);

const Up_svg = () => (
  <svg
    width="48"
    height="84"
    viewBox="0 0 48 84"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="14" cy="78" r="5.5" stroke="#FF0B17" />
    <circle cx="14" cy="46" r="5.5" stroke="#FF0B17" />
    <g filter="url(#filter0_f_72_49)">
      <circle cx="14" cy="14" r="6" fill="#FF0B17" />
    </g>
    <circle cx="14" cy="14" r="6" fill="#FF0B17" />
    <path
      d="M39.636 19H33.295L31.68 16.875V9.276L33.312 7.1H39.619L41.268 9.276V16.875L39.636 19ZM40.367 9.582L39.177 8.001H33.737L32.564 9.582V16.535L33.754 18.082H39.177L40.367 16.535V9.582ZM45.9354 19V8.001H44.7794L43.5384 8.868V9.769H42.6204V8.426L44.4734 7.083H46.8534V19H45.9354Z"
      fill="white"
    />
    <defs>
      <filter
        id="filter0_f_72_49"
        x="0.4"
        y="0.4"
        width="27.2"
        height="27.2"
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
          stdDeviation="3.8"
          result="effect1_foregroundBlur_72_49"
        />
      </filter>
    </defs>
  </svg>
);
