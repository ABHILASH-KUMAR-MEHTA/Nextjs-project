"use client";

import React, { useState, useEffect } from "react";
import InputField from "../components/Input";
import Link from "next/link";
import "../globals.css";

const RegisterModal = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    // Check if the user is already logged in
    const session = localStorage.getItem("session");
    if (session) {
      setError(
        "You are already logged in. Please log out to register a new account."
      );
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (error) return; // Prevent further actions if logged in

    const { firstName, email, password } = formData;

    // Validation
    if (!firstName || !email || !password) {
      setError("All fields are required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // Check if the email already exists
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some((user: any) => user.email === email)) {
      setError("An account with this email already exists.");
      return;
    }

    // Save user
    const newUser = { firstName, email, password };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));

    // Save session
    localStorage.setItem("session", JSON.stringify({ email }));

    setError(null);
    setSuccessMessage("Registration successful! You are now logged in.");
    setFormData({ firstName: "", email: "", password: "" });
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-900">
          Register
        </h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {successMessage && (
            <p className="text-green-500 text-center">{successMessage}</p>
          )}
          <InputField
            label="First Name"
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <InputField
            label="Email"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <InputField
            label="Password"
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="w-full bg-lime-600 text-white py-2 rounded-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500"
          >
            Register
          </button>
        </form>
        <Link href="/">
          <button className="mt-4 text-center text-gray-600 hover:underline">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterModal;
