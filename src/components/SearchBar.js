import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {FaSearchPlus} from "react-icons/fa";
import "../css/searchBar.css";
import FilteredClinics from "./FilteredClinics.js";
import {vetClinics} from "../data/vetClinicData.js";

const SearchBar = () => {

  const [textInput, setTextInput] = useState("");
  const [division, setDivision] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [filteredClinics, setFilteredClinics] = useState([]);

  const filterClinic = ()=>{
    const temp = vetClinics.filter( (clinic)=> (clinic.location.division == division) );
    console.log(temp)
    setFilteredClinics(temp);
  }
  const handleDivision = (e)=>{
    setDivision(e.target.value);
    console.log(division);
  }
  const handleInput = (e)=>{
    setTextInput(e.target.value);
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    filterClinic();
    setIsSubmitted(!isSubmitted);
  }

  return (
    <>
      <div className="search-bar">
        <div className="main-form-container">
          <form id="" className="" method="post" onSubmit={handleSubmit}>
            <input type="text" className="main-input main-name" name="division" value={textInput} onChange={handleInput} placeholder="Search by name"/>
            <select name="search-region" value={division} onChange={handleDivision} className="search-region">
              <option value="region">Your region</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Mymenshing">Mymenshing</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Barishal">Barishal</option>
            </select>
            <input id="main-submit" className="" type="submit" value="Search" />
          </form>

        </div>
      </div>
      {
        isSubmitted ? (
          filteredClinics.map((clinic)=>{
            return(
              <FilteredClinics key={clinic.id} clinic={clinic} />
            );
          })
        ): null
      }

    </>

  );
}

export default SearchBar;

