import axios from 'axios';
import {POKEMON_API_URL} from '../consts';
import {Pokemon} from '../models/Pokemon';
import {BeautifulDate} from '../models/BeautifulDate';
import {GET_POKEMONS, UPDATE_POKEMONS, CATCH_POKEMON, RELEASE_POKEMON} from './types';

export function getPokemons() {
	return async dispatch => {
		try {
			const {count} = await axios.get(POKEMON_API_URL).then(resp => resp.data);
			const params = {
				limit: count,
			};
			const {results} = await axios.get(POKEMON_API_URL, {params}).then(resp => resp.data);
			dispatch({
				type: GET_POKEMONS,
				payload: results.map(unit => new Pokemon(unit.name, unit.url)),
			});
		} catch (e) {
			console.log(e);
		}
	};
}

export function getFullPokemons(pokemonsArr) {
	return async dispatch => {
		try {
			const fullyLoadedPokemons = await Promise.all(pokemonsArr.map(async unit => {
				const newPokemon = new Pokemon(unit.name, unit.url);
				await newPokemon.load();
				return newPokemon;
			}));
			dispatch({
				type: UPDATE_POKEMONS,
				payload: fullyLoadedPokemons,
			});
		} catch (e) {
			console.log(e);
		}
	};
}

export function catchPokemon(pokemonId) {
	const payload = {
		id: pokemonId,
		dateCollected: new BeautifulDate(),
	};
	return dispatch => {
		dispatch({
			type: CATCH_POKEMON,
			payload,
		});
	};
}

export function releasePokemon(pokemonId) {
	return dispatch => {
		dispatch({
			type: RELEASE_POKEMON,
			payload: pokemonId,
		});
	};
}

