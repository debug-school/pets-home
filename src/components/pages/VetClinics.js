import React from 'react';
import SearchBar from "../SearchBar.js";
import {vetClinics} from "../../data/vetClinicData.js";
import img from "../../images/clinics/1.jpg";
import "../../css/vetClinics.css";
import { MdLocationOn, MdPhone,MdEmail } from "react-icons/md";

const VetClinics =()=> {
  return(
  	<div className="vet-clinics">
  		<SearchBar />

  		<div className="clinic-wrapper">
  			{vetClinics.map((clinic)=>{
  				return(
		  			<div className="clinic">
		  				<h2 className="title">{clinic.title}</h2>
		  				<img className="vet-img" src={img} alt="vet clinics"/>
		  				<p className="vet-info">
		  					{clinic.info}
		  				</p>
		  				<p className="vet-location">
		  					<MdLocationOn className="location-icon" />
		  					{clinic.location.address}
		  					<strong style={{display:"block"}}> {clinic.location.division} </strong>
		  				</p>
		  				<span className="vet-contact">
		  					<span className="vet-contact-item">
		  						<MdPhone className="mdPhone contact-icon" />
		  						{clinic.contact.cell}
		  					</span>
		  					<span className="vet-contact-item">
		  						<MdEmail className="mdEmail contact-icon" />
		  						{clinic.contact.email}
		  					</span>
		  				</span>
		  			</div>
  				)
  			})}

  		</div>

  	</div>
  );
}

export default VetClinics;