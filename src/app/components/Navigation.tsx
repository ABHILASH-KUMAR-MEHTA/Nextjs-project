import React from "react";

const Navigation: React.FC = () => {
  const navItems = ["Home", "Features", "Community", "Blog", "Pricing"];

  return (
    <nav role="navigation">
      <ul className="flex  flex-col lg:flex-row gap-4 items-center text-neutral-600">
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-green-500 text-md font-bold transition-colors duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
