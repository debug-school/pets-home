import React from 'react';
import {FaSearchPlus} from "react-icons/fa";
import {Link} from "react-router-dom";
import "../css/searchBar.css";

const SearchBar = () => {


  return (
      <div className="search-bar">
        <div className="main-form-container">
          <form id="" className="" method="post">
            <input type="text" className="main-input main-name" name="NAME" value="Search by name"/>
            <select name="search-region" className="search-region">
              <option value="region">Your region</option>
              <option value="dhaka">Dhaka</option>
              <option value="rajshahi">Rajshahi</option>
              <option value="sylhet">Sylhet</option>
              <option value="chittagong">Chittagong</option>
              <option value="mymenshing">Mymenshing</option>
              <option value="rangpur">Rangpur</option>
              <option value="barishal">Barishal</option>
            </select>
            <input id="main-submit" className="" type="submit" value="Search" />
          </form>

        </div>
      </div>

  );
}

export default SearchBar;