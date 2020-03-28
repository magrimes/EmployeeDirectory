import React, { useContext } from "react";
import "../styles/SearchName.css";
import DataAreaContext from "../utils/DataAreaContext";

const SearchName = () => {
  const context = useContext(DataAreaContext);

  return (
    <div className="searchbox">
      <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="">
              Search Employee By Name
            </span>
          </div>
          <input
          className="formsrch"
          type="search"
          placeholder="Name"
          aria-label="Search"
          onChange={e => context.handleSearchChange(e)}
        />
        </div>
    </div>
  );
}

export default SearchName;