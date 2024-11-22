import React from "react";
import Link from "next/link";

interface HeroProps {
  title: React.ReactNode;
  subtitle: string;
  buttonText: string;
  imageSrc: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  imageSrc,
}) => {
  return (
    <section
      className="flex flex-wrap gap-10 items-center pt-36 px-24 py-16 w-full bg-slate-100 max-md:px-5 max-md:max-w-full "
      role="region"
      aria-labelledby="hero-title"
    >
      <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
        <h1
          id="hero-title"
          className="text-6xl font-semibold text-green-500 leading-[53px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px] ml-5"
        >
          {title}
        </h1>
        <p className="mt-3 ml-5 text-1xl text-neutral-500 max-md:max-w-full">
          {subtitle}
        </p>
        <Link href="/Sign-up">
          <button
            className="ml-5 self-start px-6 py-2.5 mt-6 text-xl font-medium text-center text-white whitespace-nowrap bg-green-500 rounded-sm hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 max-md:px-5"
            aria-label={buttonText}
          >
            {buttonText}
          </button>
        </Link>
      </div>
      <img
        loading="lazy"
        src={imageSrc}
        alt="Hero illustration"
        className="object-contain self-stretch my-auto aspect-[0.96] min-w-[240px] lg:ml-0 md:ml-36  w-[350px] mr-10"
      />
    </section>
  );
};

export default Hero;

// shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
