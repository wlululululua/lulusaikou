import React from "react";
import { Link } from "gatsby";

const Navbar = ({ title, description }) => {
	return (
		<nav>
			<h1>{title}</h1>
			<p>{description}</p>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/blogs">Blogs</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
