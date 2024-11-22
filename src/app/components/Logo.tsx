import React from "react";

interface LogoProps {
  src1: string;
  src2: string;
}

const Logo: React.FC<LogoProps> = ({ src1, src2 }) => {
  return (
    <div className="flex gap-0.5 md:gap-0.5 items-center self-stretch my-auto">
      <img
        loading="lazy"
        src={src1}
        alt="Company logo icon"
        className="object-contain shrink-0 self-stretch my-auto aspect-[1.47] w-[40px]"
      />
      <img
        loading="lazy"
        src={src2}
        alt="Company name"
        className="object-contain shrink-0 self-stretch my-auto mt-3 aspect-[5.21] h-[30px]  w-[180px]"
      />
    </div>
  );
};

export default Logo;
// shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
