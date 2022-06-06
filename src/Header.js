import React, { useRef } from "react";
import "./Header.css";
import { BsSearch } from "react-icons/bs";
import Navbar from "./Navbar.js";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const nameForm = useRef(null);
  const history = useNavigate();

  const search = () => {
    const form = nameForm.current["search"].value;
    console.log(form);
    var query = `/search/${form}`;
    history(query);
  };

  return (
    <div className="header">
      <div className="header__top">
        <div className="header__name">
          <Link to="/">Name </Link>
        </div>
        <div className="header__search">
          <form ref={nameForm} className="header__form">
            <input className="header__searchInput" name={"search"}></input>
          </form>
          <button className="header__searchbutton" onClick={search}>
            <BsSearch className="header__searchIcon" />
          </button>
        </div>
      </div>
      <div className="header__nav">
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
