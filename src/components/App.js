import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  // Container Style
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    margin: 0,
    padding: 0,
  };

  // Counter Heading Style
  const countStyle = {
    fontSize: "4rem",
    fontWeight: "bold",
    color: "#333",
    userSelect: "none",
    marginBottom: "20px",
    cursor: "not-allowed",
    transition: "transform 0.2s ease",
    willChange: "transform",
  };

  // Button Style
  const buttonStyle = {
    padding: "12px 24px",
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0, 123, 255, 0.3)",
    transition: "all 0.3s ease",
  };

  // Button Hover Effect
  const buttonHoverStyle = {
    ...buttonStyle,
    transform: "scale(1.05)",
    boxShadow: "0 6px 15px rgba(0, 123, 255, 0.5)",
    backgroundColor: "#0056b3",
  };

  return (
    <div style={containerStyle}>
      <h1
        className="count"
        onDoubleClick={() => alert("Can't edit it")}
        style={countStyle}
      >
        {count}
      </h1>
      <button
        className="increment-button"
        onClick={() => setCount(count + 1)}
        style={buttonStyle}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007BFF")}
      >
        Increment
      </button>
    </div>
  );
};

export default App; 