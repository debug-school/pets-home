import React from 'react';
import {Link} from "react-router-dom";
import { FaBars, FaChevronDown, FaGripLinesVertical, FaCat, FaDog, FaFish } from 'react-icons/fa';
import { GiTurtle, GiEgyptianBird } from "react-icons/gi";
import { MdForum } from "react-icons/md";



const SideBar = () => {
	return (
		<aside className="sidebar">
			<div className="sidebar-title">
				<FaBars className="fa-bars" />
				 <span>Browse Categories</span>
				<FaChevronDown className="fa-chevron-down" />
			</div>

			<div className="sidebar-category">
				<GiTurtle className="sidebar-category-logo" />
				<span className="sidebar-category-text" >
					<span>Turtle</span>
					<Link to="/foods" className="food-category category-link">Food</Link>
					<FaGripLinesVertical className="fa-grip-lines-vertical" />
					<Link to="/medicine" className="medicine-category category-link">Medicine</Link>
				</span>
			</div>
			<div className="sidebar-category">
				<FaCat className="sidebar-category-logo" />
				<span className="sidebar-category-text" >
					<span>Cat</span>
					<Link to="/foods" className="food-category category-link">Food</Link>
					<FaGripLinesVertical className="fa-grip-lines-vertical" />
					<Link to="/medicine" className="medicine-category category-link">Medicine</Link>
				</span>
			</div>
			<div className="sidebar-category">
				<FaDog className="sidebar-category-logo" />
				<span className="sidebar-category-text" >
					<span>Dog</span>
					<Link to="/foods" className="food-category category-link">Food</Link>
					<FaGripLinesVertical className="fa-grip-lines-vertical" />
					<Link to="/medicine" className="medicine-category category-link">Medicine</Link>
				</span>
			</div>
			<div className="sidebar-category">
				<GiEgyptianBird className="sidebar-category-logo" />
				<span className="sidebar-category-text" >
					<span>Bird</span>
					<Link to="/foods" className="food-category category-link">Food</Link>
					<FaGripLinesVertical className="fa-grip-lines-vertical" />
					<Link to="/medicine" className="medicine-category category-link">Medicine</Link>
				</span>
			</div>
			<div className="sidebar-category">
				<FaFish className="sidebar-category-logo" />
				<span className="sidebar-category-text" >
					<span>Fish</span>
					<Link to="/foods" className="food-category category-link">Food</Link>
					<FaGripLinesVertical className="fa-grip-lines-vertical" />
					<Link to="/medicine" className="medicine-category category-link">Medicine</Link>
				</span>
			</div>

			<div className="sidebar-footer">
				<Link to="/forum" className="category-link">
					<MdForum className="sidebar-category-logo" />
					Forum
					<FaGripLinesVertical className="fa-grip-lines-vertical" />
					Community for Pet Owners
				</Link>
			</div>

		</aside>
	)
}

export default SideBar;