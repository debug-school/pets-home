import React from 'react';
import { MdLocationOn, MdPhone,MdEmail } from "react-icons/md";
import img from "./../images/clinics/1.jpg";

const Clinic = ({clinic}) => {
	return (
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
}

export default Clinic;