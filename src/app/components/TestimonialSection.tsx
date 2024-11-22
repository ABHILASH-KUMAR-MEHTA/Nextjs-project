"use client"; // Mark this file as a Client Component

import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

interface TestimonialSectionProps {
  imageSrc: string;
  testimonialText: string;
  authorName: string;
  authorTitle: string;
  clientLogos?: string[];
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  imageSrc,
  testimonialText,
  authorName,
  authorTitle,
  clientLogos = [],
}) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section
      className="flex flex-col md:flex-row items-center gap-6 md:gap-12 lg:gap-16 py-8 sm:py-10 px-4 sm:px-8 md:px-12 lg:px-20 bg-slate-100"
      role="region"
      aria-labelledby="testimonial-section"
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center md:justify-start">
        <img
          loading="lazy"
          src={imageSrc}
          alt="Testimonial author"
          className="object-contain rounded-md shadow-md w-full h-auto max-w-full sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px]"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col gap-4">
        {/* Testimonial Text */}
        <p
          id="testimonial-section"
          className="text-[clamp(0.875rem,2vw,1.125rem)] md:text-[clamp(1rem,2.5vw,1.25rem)] font-medium leading-relaxed text-neutral-600 lg:text-[10px] md:text-sm xl:text-xl"
        >
          {testimonialText}
        </p>

        {/* Author Information */}
        <div>
          <div className="text-[clamp(1rem,2.5vw,1.5rem)] font-semibold text-green-500">
            {authorName}
          </div>
          <div className="mt-1 text-[clamp(0.75rem,2vw,1rem)] text-gray-400">
            {authorTitle}
          </div>
        </div>

        {/* Carousel and Button Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-6">
          {/* Carousel */}
          <div className="w-full md:w-3/4">
            <Slider {...sliderSettings}>
              {clientLogos.map((logo, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    loading="lazy"
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    className="object-contain mx-auto w-[clamp(2.5rem,6vw,4rem)] h-[clamp(2.5rem,6vw,4rem)]"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Call-to-Action Button */}
          <div className="w-full md:w-1/4 flex justify-center md:justify-end">
            <button
              className="flex items-center gap-2 px-[clamp(0.5rem,2vw,1rem)] py-[clamp(0.25rem,1.5vw,0.5rem)] text-[clamp(0.75rem,2vw,1rem)] font-semibold text-green-500 border border-green-500 rounded-lg hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              aria-label="Meet all customers"
            >
              <span>Meet all customers</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/1ddc48b5e304a24e6ffbc1f1fa2595c8fb9b26720d8a50370887d09ab98bda72?apiKey=66f24bb10319401b926f00beb93fa44e&"
                alt="Arrow"
                className="object-contain w-[clamp(0.75rem,2vw,1rem)]"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
