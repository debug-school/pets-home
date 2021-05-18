import React from 'react';
import '../../css/shop.css';
import Foods from "./Foods.js";
import Medicines from "./Medicines.js";

export default function Shops() {
  return(
  	<>
	  	<h1 style={{textAlign:"center",margin:"2rem 0"}}>
	  		Welcome to Our Shops!
	  	</h1>
	  	<div className="shop"> 
	  		<Foods  />
	  		<Medicines />
	  	</div>
  	</>
  )
}
