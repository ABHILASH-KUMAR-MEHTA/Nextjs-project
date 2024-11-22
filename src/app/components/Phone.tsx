import React from "react";
import Link from "next/link";

interface PixelgradeExperienceProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
}

const Phone: React.FC<PixelgradeExperienceProps> = ({
  imageSrc,
  title,
  description,
  buttonText,
}) => {
  return (
    <section className="bg-neutral-100 p-10">
      <div className="grid grid-cols-2 gap-9 items-center px-24 max-md:px-5 max-md:grid-cols-1">
        <div className="flex justify-center">
          <img
            loading="lazy"
            src={imageSrc}
            alt="Pixelgrade experience illustration"
            className="object-contain w-[408px] min-w-[280px] max-w-full"
          />
        </div>

        <div className="flex flex-col items-start max-md:mt-6">
          <h2 className="text-3xl font-semibold leading-10 text-neutral-800">
            {title}
          </h2>

          <p className="mt-3 text-sm leading-4 text-neutral-800">
            {description}
          </p>
          <Link href="/Register">
            <button className="px-6 py-2.5 mt-6 text-base font-medium text-white bg-green-500 rounded-sm w-36">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Phone;
