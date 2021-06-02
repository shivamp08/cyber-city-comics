import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../logo.svg";
import "./stylesheets/Header.css";

const Header = () => {
  const history = useHistory();
  const [input, setInput] = useState(0);

  function handleClick() {
    history.push(`/${input}`);
    window.location.reload();
  }

  return (
    <div className="header">
      <div>
        <a href="/">
          <img className="logo" src={logo} alt="Cyber City Comics" />
        </a>
      </div>
      <div className="search-bar">
        <input
          className="search-field"
          type="text"
          title="Search"
          placeholder="search by comic #..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="search-btn" onClick={handleClick}>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
