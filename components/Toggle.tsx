import { useState } from "react";

export default function Toggle() {
  const [isVisible, setIsVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "1rem",
        margin: "10px",
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <h2>Toggle Button with Dark Mode</h2>

      {/* Show/Hide toggle */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        style={{
          padding: "8px 16px",
          marginBottom: "10px",
          marginRight: "10px",
          cursor: "pointer",
        }}
      >
        {isVisible ? "Hide" : "Show"}
      </button>

      {/* Dark Mode toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
            border: "1px solid black",
          padding: "8px 16px",
          marginBottom: "10px",
        }}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Conditionally visible text */}
      {isVisible && <p>This is the text that is part of the toggle button!</p>}
    </div>
  );
}
