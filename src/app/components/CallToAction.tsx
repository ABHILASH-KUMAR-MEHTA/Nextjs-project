"use client"; // Marking this as a client component

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import RegisterModal without SSR (for client-side rendering only)
const RegisterModal = dynamic(() => import("../Demo/page"), {
  ssr: false, // Prevent server-side rendering for the modal component
});

interface CallToActionProps {
  title: string;
  buttonText: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ title, buttonText }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [isClient, setIsClient] = useState(false); // To ensure it's rendered only on the client

  // Toggle modal visibility on button click
  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState); // Toggle modal visibility (open if closed, close if open)
  };

  useEffect(() => {
    setIsClient(true); // Mark client-side mount
  }, []);

  if (!isClient) {
    return null; // Prevent rendering on SSR, only show once on the client side
  }

  return (
    <section
      className="flex flex-col items-center py-6 w-full text-center bg-slate-100 max-md:max-w-full"
      role="region"
      aria-labelledby="cta-title"
    >
      <h2
        id="cta-title"
        className="text-5xl font-semibold text-gray-800 leading-[53px] w-[618px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]"
      >
        {title}
      </h2>
      <button
        onClick={toggleModal} // Open or close modal on button click
        className="flex gap-1.5 justify-center items-center px-6 py-2.5 mt-6 text-xs font-medium text-white bg-green-500 rounded-sm hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 max-md:px-5"
        aria-label={buttonText}
      >
        <span className="self-stretch my-auto text-2xl">{buttonText}</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/cce0da6d61effaceb645b8cf834cc2db639003fcce6466cb12ae744bb64352ef?apiKey=66f24bb10319401b926f00beb93fa44e&"
          alt="Icon for demo scheduling"
          className="object-contain shrink-0 rounded-lg self-stretch mt-3 my-auto aspect-square w-[40px]"
        />
      </button>

      {/* Conditionally render the RegisterModal based on isModalOpen */}
      {isModalOpen && <RegisterModal />}
    </section>
  );
};

export default CallToAction;
