import React from 'react';
import {FaSearchPlus} from "react-icons/fa";
import {Link} from "react-router-dom";

const SearchBar = ({keyword,setKeyword}) => {


  return (
    <div className="search-bar">
      <input 
        className="search-input"
        value={keyword}
        placeholder={"search Vet Clinics"}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <label for="division" style={{padding:".5rem"}} >Your region:</label>
      <select name="division" id="division">
        <option value="dhaka">Dhaka</option>
        <option value="chittagong">Chittagong</option>
        <option value="mymenshing">Mymenshing</option>
        <option value="sylhet">Sylhet</option>
        <option value="rajshahi">Rajshahi</option>
        <option value="khulna">Khulna</option>
        <option value="rangpur">Rangpur</option>
        <option value="barishal">Barishal</option>
      </select>
      <Link to="/vet-clinics">
        <FaSearchPlus 
          style={{fontSize:"1.75rem",marginLeft:"10px",paddingTop:"10px"}} 
        />
      </Link>
    </div>
  );
}

export default SearchBar;