"use client";

import React from "react";

interface LogoutButtonProps {
  onLogout?: () => void; // Optional callback for parent to handle logout
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
  const handleLogout = () => {
    // Clear the session
    localStorage.removeItem("session");

    // Notify the parent component (if provided)
    if (onLogout) {
      onLogout();
    }

    // Optionally reload the page to ensure the app state updates
    window.location.reload();
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
