import React from "react";

type Props = {
  text1: string;
  coloredText?: string;
};
// for adding moving texts add them outside MaxWidthWrapper if you want to cover full width:
const MovingText = ({ text1, coloredText }: Props) => {
  return (
    <section className="flex flex-col bg-foreground uppercase space-y-4 text-[#fff] text-[3.5vw] font-extrabold py-10 lg:w-full">
      <div className="container-slide flex">
        <div className="container-slide-1">
          {text1}
          <span className="text-red-600">{coloredText}</span>
          <span className="text-primary">{"Welcome."}</span>
        </div>
        <div className="container-slide-1">
          {text1}
          <span className="text-red-600">{coloredText}</span>
          <span className="text-primary">{" Welcome."}</span>
        </div>
        <div className="container-slide-1">
          {text1}
          <span className="text-red-600">{coloredText}</span>
          <span className="text-primary">{"Welcome."}</span>
        </div>
      </div>
      <div className="container-slide flex">
        <div className="container-slide-2">
          {text1}
          <span className="text-red-600">{coloredText}</span>
          <span className="text-primary">{"Welcome."}</span>
        </div>
        <div className="container-slide-2">
          {text1}
          <span className="text-red-600">{coloredText}</span>
          <span className="text-primary">{"Welcome."}</span>
        </div>
        <div className="container-slide-2">
          {text1}
          <span className="text-red-600">{coloredText}</span>
          <span className="text-primary">{"Welcome."}</span>
        </div>
      </div>
    </section>
  );
};

export default MovingText;
