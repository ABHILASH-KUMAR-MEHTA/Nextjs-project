import React from "react";

interface BusinessStatsProps {
  title: string;
  subtitle: string;
  stats: { imageSrc: string; count: string; label: string }[];
}

const BusinessStats: React.FC<BusinessStatsProps> = ({
  title,
  subtitle,
  stats,
}) => {
  return (
    <section className="bg-neutral-100 p-5 md:p-10 lg:px-20 xl:px-32">
      {/* Container */}
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-10">
        {/* Title Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center mb-8 md:mb-0 md:w-1/2 flex-grow">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-neutral-800">
            {title}
          </h2>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-green-600 font-semibold mt-2">
            {subtitle}
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-500 mt-2">
            We reached here with our hard work and dedication
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:w-1/2 flex-grow">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex gap-4 flex-row items-center justify-center"
            >
              {/* Image */}
              <div className="w-14 h-14 flex-shrink-0">
                <img
                  src={stat.imageSrc}
                  alt={stat.label}
                  className="object-contain w-full h-full"
                />
              </div>
              {/* Count and Label */}
              <div className="flex flex-col text-center md:text-left">
                <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-neutral-800">
                  {stat.count}
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-neutral-500">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessStats;
