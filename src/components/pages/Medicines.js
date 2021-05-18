import React from 'react';
import {medicines} from "../../data/medicineData.js";
import SingleItem from "../SingleItem.js";
import '../../css/shop.css';

const Medicine = () => {
	return (
		<div className="shop">
			<SingleItem items={medicines} />
		</div>
	)
}

export default Medicine;