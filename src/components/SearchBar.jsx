import React, { useState } from "react";
import "./SearchBar.css"; // Ensure this path is correct

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() === "") return;
    onSearch(query ? query : "car");
  };
  const nameStyle = {
    fontSize: "18px",
    fontWeight: "bold",
  };

  const emailStyle = {
    fontSize: "16px",
    color: "gray",
  };

  return (
    <div>
      <div>
        <div style={nameStyle}>Name: Sunny Raj</div>
        <div style={emailStyle}>Email: sunnyrajbodhgaya13@gmail.com</div>
      </div>
      <div
        style={{
          fontSize: "50px",
          textAlign: "center",
          fontFamily: "serif",
          textDecoration: "underline",
        }}
      >
        Search Page
      </div>
      <div className="search-bar" style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Search for images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch} disabled={!query.trim()}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
