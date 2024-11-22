"use client";

import React, { useState, useEffect } from "react";
import InputField from "../components/Input";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "../globals.css";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Redirect if already logged in
    const session = localStorage.getItem("session");
    if (session) {
      router.replace("/"); // Redirect to home or dashboard
    }
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;

    // Validation
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Find user matching credentials
    const user = users.find(
      (user: any) => user.email === email && user.password === password
    );

    if (!user) {
      setError("Invalid email or password.");
      return;
    }

    // Successful login
    localStorage.setItem("session", JSON.stringify(user));
    setError(null);
    router.replace("/"); // Redirect to home or dashboard
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-900">
          Sign In
        </h1>
        <p className="mt-2 text-center text-gray-600">
          Enter your credentials to access your account.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {error && <p className="text-red-500 text-center">{error}</p>}
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
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="w-full bg-lime-600 text-white py-2 rounded-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don’t have an account?{" "}
          <Link href="/register" className="text-lime-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
