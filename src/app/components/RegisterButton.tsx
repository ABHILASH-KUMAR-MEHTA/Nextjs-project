"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface RegisterButtonProps {
  text: string;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ text }) => {
  return (
    <Link
      href="/pages" // This matches the folder name under `src/app`
      className="inline-flex items-center px-6 py-2.5 text-white bg-green-500 rounded hover:bg-green-600 transition-colors duration-300 focus:ring-2 focus:ring-green-500"
      aria-label={text}
    >
      {text}
      <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-md" />
    </Link>
  );
};

export default RegisterButton;
