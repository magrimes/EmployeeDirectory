import React from "react";
import SearchName from "../SearchName/SearchName";
import "/Nav.css";

function Nav() {
  return (
    <nav className="navbar">
      <div className="collapse navbar-collapse row" id="navbarNav">
        <div className="search-area col-2">
          <SearchName />
        </div>
      </div>
    </nav>
  );
}

export default Nav;