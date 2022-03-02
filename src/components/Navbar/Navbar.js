import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
	<div className="navbar">
		<div>
			<img src="http://pngimg.com/uploads/pokemon_logo/pokemon_logo_PNG3.png" width="120"/>
		</div>
		<div className="navbar__links">
			<NavLink className="link" to="/allPokemons">Все покемоны</NavLink>
			<NavLink className="link" to="/collected">Коллекция</NavLink>
		</div>
	</div>
);

export default Navbar;
