import React from 'react';
import "../css/singleItem.css";
import {useLocation} from "react-router-dom";


const SingleItem = ({items}) => {
	let location = useLocation();
	location = location.pathname.split("/");
	location = location[location.length-1];

	console.log("ami params",location);

	if(location == "medicines" || location == "foods" || location=="shops"){
		return (
			items.map((item)=>{
				return(
					<div className="container">
			  			<div className="images">
			   				<img src={item.img} />
			 			</div>

						<div className="product">
							<h1>{item.title}</h1>
							<h2>${item.price}</h2>
							<strong>{item.type}</strong>
							<div className="buttons">
							  <button className="btn add">Add to Cart</button>
							</div>
						</div>
					</div>
				)
			})			
		)
	}
	else{
		return(
		items.map((item)=>{
			console.log("ami hajar bar boltesi");
			if(location==item.category){
				return(
				<div className="container">
		  			<div className="images">
		   				<img src={item.img} />
		 			</div>

					<div className="product">
						<h1>{item.title}</h1>
						<h2>${item.price}</h2>
						<strong>{item.type}</strong>
						<div className="buttons">
						  <button className="btn add">Add to Cart</button>
						</div>
					</div>
				</div>
			)
			}
		})
		)
	}

}

export default SingleItem;





