import React from 'react';
import SearchBar from "../SearchBar.js";
import Clinic from "../Clinic.js";
import {vetClinics} from "../../data/vetClinicData.js";

import "../../css/vetClinics.css";


const VetClinics =()=> {
  return(
  	<div className="vet-clinics">
  		<SearchBar />

  		<div className="clinic-wrapper">
  			{vetClinics.map((clinic)=>{
  				return(
  					<Clinic key={clinic.id} clinic={clinic} />
  				)
  			})}

  		</div>

  	</div>
  );
}

export default VetClinics;