import React from "react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  features?: Feature[]; // Optional, defaults to an empty array
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  features = [],
}) => {
  return (
    <section
      className="flex flex-col pb-8 pt-6 px-4 lg:pt-10 lg:pb-12 lg:px-16 text-center bg-gray-50"
      role="region"
      aria-labelledby="feature-section-title"
    >
      {/* Title and Subtitle */}
      <div className="mb-6 lg:mb-8">
        <h2
          id="feature-section-title"
          className="text-2xl lg:text-3xl font-semibold text-neutral-800"
        >
          {title}
        </h2>
        <p className="mt-2 text-base lg:text-lg text-neutral-600">{subtitle}</p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.isArray(features) &&
          features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-shadow hover:shadow-neutral-800"
            >
              <img
                loading="lazy"
                src={feature.icon}
                alt={feature.title}
                className="object-contain w-12 h-12"
              />
              <h3 className="mt-4 text-lg font-medium text-neutral-700 text-center">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-500 text-center">
                {feature.description}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default FeatureSection;
