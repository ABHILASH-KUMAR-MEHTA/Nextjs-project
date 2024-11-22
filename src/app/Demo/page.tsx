"use client"; // Marking this as a client component

import React, { useState, useEffect, useCallback } from "react";
import InputField from "./Inputs"; // Assuming this is a separate InputField component
import "../globals.css";

const RegisterModal: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    company: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(true); // Initially open modal

  const handleEscapeKey = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsModalOpen(false); // Close modal when Escape key is pressed
    }
  }, []);

  useEffect(() => {
    // Safe to use `window` here after the component mounts
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [handleEscapeKey]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsModalOpen(false); // Close the modal after submitting the form
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-100 bg-opacity-50 transition-opacity ${
        isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`} // Add classes to handle modal visibility
      aria-labelledby="register-heading"
      aria-modal="true"
      role="dialog"
    >
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg relative">
        <h1
          id="register-heading"
          className="text-3xl font-semibold text-center text-gray-900"
        >
          Schedule a Demo
        </h1>
        <p className="mt-2 text-center text-gray-600">
          Fill out the form to schedule a personalized demo of our product.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="flex gap-4">
            <InputField
              label="First Name"
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <InputField
              label="Email"
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <InputField
            label="Company"
            type="text"
            id="company"
            value={formData.company}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="w-full bg-lime-600 text-white py-2 rounded-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500"
          >
            Schedule Demo
          </button>
        </form>
        <button
          // Close modal on button click
          onClick={() => setIsModalOpen(false)}
          className="absolute text-2xl top-3 right-3 text-gray-600 hover:text-gray-800 focus:outline-none"
          aria-label="Close registration modal"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;
