"use client";

import React from "react";
import Link from "next/link";
import "../globals.css";

const Service = () => {
  return (
    <div className="relative container mx-auto p-2 sm:p-8 md:p-12 lg:p-20 flex flex-col min-h-screen">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  text-center sm:text-center mb-6 sm:mb-8 md:mb-10">
        Community Management Services
      </h1>
      <p className="text-xl sm:text-2xl md:text-3xl text-center mb-6 sm:mb-8 md:mb-10">
        Our community management services are designed to help you build and
        engage a thriving online community. From moderation to content curation,
        we’ve got you covered.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mb-auto">
        <div className="space-y-4">
          <h2 className="text-2xl text-center sm:text-center sm:text-3xl md:text-4xl font-bold">
            Moderation
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl">
            Our team of experienced moderators will ensure your community stays
            safe and on-topic. We handle flagging, banning, and conflict
            resolution.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl text-center sm:text-center sm:text-3xl md:text-4xl font-bold">
            Content Curation
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl">
            We’ll work with you to curate high-quality content that keeps your
            community engaged and coming back. From blog posts to discussion
            topics, we’ve got you covered.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl text-center sm:text-center sm:text-3xl md:text-4xl font-bold">
            Analytics
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl">
            Our advanced analytics tools will give you insights into your
            community’s activity, engagement, and growth. Make data-driven
            decisions to improve your community.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl text-center sm:text-center sm:text-3xl md:text-4xl font-bold">
            Engagement
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl">
            We’ll help you foster a thriving, engaged community through events,
            challenges, and other interactive experiences. Keep your members
            coming back.
          </p>
        </div>
      </div>

      {/* Close button */}
      <Link href="/">
        <button
          type="button"
          className="bg-lime-600 ml-auto mt-6 sm:mt-8 md:mt-10 text-white text-base sm:text-lg md:text-xl py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-lg shadow-lg hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-800"
        >
          Close
        </button>
      </Link>
    </div>
  );
};

export default Service;
