import OnePokeStandart from '../models/OnePokeStandart';
import axios from 'axios';

export default class CardService {
	static async getAll(limit = 24, page = 1) {
		const response = await axios.get('https://pokeapi.co/api/v2/pokemon', {
			params: {
				limit,
				offset: (page - 1) * limit,
			},
		});
		const {count, results} = response.data;
		// Const fullyLoaded = await Promise.all(results.map(async u => await axios.get(u.url).then(resp => resp.data)));
		const fullyLoaded = await Promise.all(results.map(async u => axios.get(u.url).then(resp => resp.data)));
		const abstractedFullyLoaded = fullyLoaded.map(u => new OnePokeStandart(u));

		return [abstractedFullyLoaded, count];
	}

	static async getById(id) {
		const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
		return response;
	}

	static async preload(count) {
		const response = await axios.get('https://pokeapi.co/api/v2/pokemon', {
			params: {
				limit: count,
			},
		});
		return response;
	}
}
