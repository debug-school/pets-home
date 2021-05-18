import React from 'react';
import {foods} from "../../data/foodData.js";
import SingleItem from "../SingleItem.js";
import '../../css/shop.css';

const Foods = () => {
	return (
		<div className="shop">
			<SingleItem items={foods} />
		</div>
	)
}

export default Foods;