"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import RegisterButton from "./RegisterButton";
import LogoutButton from "./Logout";

interface HeaderProps {
  logoSrc1: string;
  logoSrc2: string;
  registerButtonText: string;
}

const Header: React.FC<HeaderProps> = ({
  logoSrc1,
  logoSrc2,
  registerButtonText,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if a session exists (user is logged in)
    const session = localStorage.getItem("session");
    setIsLoggedIn(!!session);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header
      className="flex fixed z-40 top-0 items-center justify-between w-full p-4 bg-white sm:px-8 lg:px-24"
      role="banner"
    >
      {/* Logo */}
      <Logo src1={logoSrc1} src2={logoSrc2} />

      {/* Toggle Button (Visible on Mobile & Tablet) */}
      <button
        className="text-2xl md:text-3xl lg:hidden"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? "×" : "☰"}
      </button>

      {/* Navigation and Buttons */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-white lg:static lg:flex lg:items-start lg:gap-6 lg:ml-0`}
      >
        <div className="flex flex-col lg:flex-row ml-auto md:ml-34 gap-4 md:flex-col md:items-center md:gap-6 sm:flex-row sm:gap-6 p-4 sm:p-0">
          <Navigation />
          {isLoggedIn ? (
            <LogoutButton onLogout={handleLogout} />
          ) : (
            <RegisterButton text={registerButtonText} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
