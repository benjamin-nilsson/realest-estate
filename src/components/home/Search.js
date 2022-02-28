import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./../../css/Search.css";
const Search = () => {
  return (
    <div className="search">
      <h1>Find Your Dream Home</h1>
      <div className="homeSearch">
        <AiOutlineSearch
          style={{
            fontSize: "2rem",
            color: "#000",
            marginLeft: "1rem",
            cursor: "pointer",
          }}
        />
        <input type="text" placeholder="Search by city or address..." />
      </div>
    </div>
  );
};

export default Search;
