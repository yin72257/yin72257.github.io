import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaCode, FaEnvelope } from "react-icons/fa";
import classes from "./Header.module.css";

const Header = () => {
	return (
		<header className={classes.header}>
			<nav>
				<ul>
					<li>
						<NavLink className={classes.navLink} exact to="/">
							<FaHome /> Home
						</NavLink>
					</li>
					<li>
						<NavLink className={classes.navLink} to="/projects">
							<FaCode /> Projects
						</NavLink>
					</li>
					<li>
						<NavLink className={classes.navLink} to="/contact">
							<FaEnvelope /> Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
