"use client";

import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import Slider
const Slider = dynamic(() => import("react-slick"), { ssr: false });

interface ClientSectionProps {
  title: string;
  subtitle: string;
  clientLogos?: string[];
}

const ClientSection: React.FC<ClientSectionProps> = ({
  title,
  subtitle,
  clientLogos = [],
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section
      className="flex flex-col py-10 px-20 mt-7 mb-10 w-full max-md:px-5 max-md:max-w-full"
      role="region"
      aria-labelledby="client-section-title"
    >
      <div className="flex flex-col self-center max-w-full text-center w-[773px]">
        <h2
          id="client-section-title"
          className="text-2xl font-semibold leading-none text-neutral-600 max-md:max-w-full"
        >
          {title}
        </h2>
        <p className="mt-1.5 text-xs text-neutral-500 max-md:max-w-full">
          {subtitle}
        </p>
      </div>
      <div className="mt-5 w-full">
        {clientLogos.length > 0 ? (
          <Slider {...settings}>
            {clientLogos.map((logo, index) => (
              <div key={index} className="px-2">
                <img
                  loading="lazy"
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  className="object-contain mx-auto rounded-md aspect-square w-[50px]"
                />
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-center text-neutral-400">
            No client logos available.
          </p>
        )}
      </div>
    </section>
  );
};

export default ClientSection;
