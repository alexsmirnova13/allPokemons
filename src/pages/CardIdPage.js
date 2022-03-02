import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import CardItemOnePoke from '../components/CardItem/CardItemOnePoke';
import {getFullPokemons} from '../store/actions';
import './CardIdPage.css';

const CardIdPage = () => {
	const params = useParams();

	const dispatch = useDispatch();

	const {all} = useSelector(store => store);

	const pokemonToRender = all.find(u => u.id === Number(params.id));

	if (pokemonToRender && !pokemonToRender.isLoaded) {
		dispatch(getFullPokemons([pokemonToRender]));
	}

	return (
		pokemonToRender ? (
			<div className="allSpace">
				<h1 className="onePokeText">Здравствуйте, я {pokemonToRender.name}</h1>

				<div className="onePokeCard">
					<CardItemOnePoke card={pokemonToRender} key={pokemonToRender.id}/>

				</div>
			</div>
		) : null

	);
};

export default CardIdPage;
