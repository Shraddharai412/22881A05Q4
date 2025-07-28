import React, { useState } from "react";

const URLForm = ({ onShorten }) => {
  const [longUrl, setLongUrl] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [validity, setValidity] = useState(7);
  const [error, setError] = useState("");

  const generateRandomCode = () => {
    return Math.random().toString(36).substring(2, 8);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!longUrl.startsWith("http")) {
      setError("Please enter a valid URL with http or https.");
      return;
    }

    const code = customCode || generateRandomCode();
    const shortUrl = `https://shr.tn/${code}`;

    const existing = JSON.parse(localStorage.getItem("shortUrls") || "{}");

    if (existing[code]) {
      setError("Custom code already exists. Please try a different one.");
      return;
    }

    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + validity);

    existing[code] = {
      longUrl,
      shortUrl,
      createdAt: new Date(),
      expiresAt: expiryDate,
    };

    localStorage.setItem("shortUrls", JSON.stringify(existing));
    onShorten(shortUrl);
    setError("");
    setLongUrl("");
    setCustomCode("");
    setValidity(7);
  };

  const containerStyle = {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "30px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  };

  const labelStyle = {
    display: "block",
    fontWeight: "bold",
    marginBottom: "6px",
    color: "#333",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "15px",
    fontSize: "14px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const errorStyle = {
    color: "red",
    marginTop: "10px",
    fontSize: "14px",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
  };

  return (
    <form onSubmit={handleSubmit} style={containerStyle}>
      <div style={headingStyle}>URL Shortener</div>

      <label style={labelStyle}>Long URL:</label>
      <input
        type="text"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        placeholder="https://example.com"
        required
        style={inputStyle}
      />

      <label style={labelStyle}>Custom Code (optional):</label>
      <input
        type="text"
        value={customCode}
        onChange={(e) => setCustomCode(e.target.value)}
        placeholder="your-code"
        style={inputStyle}
      />

      <label style={labelStyle}>Validity (in days):</label>
      <input
        type="number"
        value={validity}
        onChange={(e) => setValidity(Number(e.target.value))}
        min="1"
        max="365"
        style={inputStyle}
      />

      <button type="submit" style={buttonStyle}>Shorten URL</button>

      {error && <p style={errorStyle}>{error}</p>}
    </form>
  );
};

export default URLForm;
