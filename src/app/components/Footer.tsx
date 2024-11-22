import React from "react";

interface FooterProps {
  logoSrc1: string;
  logoSrc2: string;
  socialIcons?: string[];
  companyLinks?: string[];
  supportLinks?: string[];
}

const Footer: React.FC<FooterProps> = ({
  logoSrc1,
  logoSrc2,
  socialIcons = [],
  companyLinks = [],
  supportLinks = [],
}) => {
  return (
    <footer
      className="flex flex-col gap-8 items-start px-6 py-10 bg-gray-800 sm:px-8 md:px-12 lg:px-16 xl:px-24"
      role="contentinfo"
    >
      {/* Footer Top Section */}
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 lg:gap-20 w-full justify-between items-start">
        {/* Logo and Copyright Section */}
        <div className="flex flex-col items-start sm:w-1/3">
          <div className="flex gap-2 items-center">
            <img
              loading="lazy"
              src={logoSrc1}
              alt="Company logo icon"
              className="object-contain shrink-0 w-[40px] h-auto"
            />
            <img
              loading="lazy"
              src={logoSrc2}
              alt="Company name"
              className="object-contain shrink-0 w-[120px] h-auto"
            />
          </div>
          <div className="flex flex-col items-start mt-4 text-sm text-slate-100">
            <p>Copyright © 2020 Landify UI Kit.</p>
            <p className="mt-1.5">All rights reserved</p>
          </div>
          <div className="flex gap-3 items-start mt-4">
            {socialIcons.map((icon, index) => (
              <a key={index} href="#">
                <img
                  loading="lazy"
                  src={icon}
                  alt={`Social media icon ${index + 1}`}
                  className="object-contain aspect-square w-7"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Company and Support Links */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-16 w-full sm:w-2/3">
          {/* Company Links */}
          <div className="flex flex-col sm:w-1/3">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="flex flex-col mt-4 text-sm text-slate-100">
              {companyLinks.map((link, index) => (
                <li key={index} className="mt-2">
                  <a
                    href="#"
                    className="hover:text-green-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="flex flex-col sm:w-1/3">
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="flex flex-col mt-4 text-sm text-slate-100">
              {supportLinks.map((link, index) => (
                <li key={index} className="mt-2">
                  <a
                    href="#"
                    className="hover:text-green-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col sm:w-1/3">
            <h3 className="text-lg font-semibold text-white">
              Stay up to date
            </h3>
            <form className="flex flex-col mt-4 text-sm text-gray-300 rounded-none">
              <label htmlFor="email" className="sr-only">
                Your email address
              </label>
              <div className="flex gap-4 justify-between px-4 py-3 rounded-md bg-white bg-opacity-20">
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  className="bg-transparent outline-none"
                />
                <button type="submit" aria-label="Subscribe">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/66f24bb10319401b926f00beb93fa44e/dcb92122433242723edd8e5dbda9d0c24d717c5d763061c568009bc99684f752?apiKey=66f24bb10319401b926f00beb93fa44e&"
                    alt="Arrow icon for subscription"
                    className="object-contain w-4 aspect-[1]"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
