import React from 'react';
import Clinic from "./Clinic.js";
import "../css/vetClinics.css";

const FilteredClinics = ({clinic}) => {
	return (
		<div className="vet-clinics">
			<div className="clinic-wrapper">
				<Clinic clinic={clinic} />
			</div>
		</div>
	)
}

export default FilteredClinics;