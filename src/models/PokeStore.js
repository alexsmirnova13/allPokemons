import axios from 'axios';
import OnePokeStandart from './OnePokeStandart';

const PokeStore = {
	all: [],

	async getPokes(limit, page, filter) {
		if (!this.all.length) {
			await PokeStore.init();
		}

		const filteredAll = [...this.all].filter(el => el.name.indexOf(filter.query) !== -1);

		function fff(a, b) {
			const fA = a[filter.sort];
			const sA = b[filter.sort];
			if (Number(fA) && Number(sA)) {
				return Number(fA) > Number(sA) ? 1 : -1;
			}

			if (typeof fA === 'string' && typeof sA === 'string') {
				return fA.localeCompare(sA);
			}
		}

		const sortedAll = [...filteredAll].sort(fff);

		const s = limit * (page - 1);
		const po = limit * page;

		const toRender = await Promise.all(sortedAll.slice(s, po).map(async (element, index) => {
			if (element.id) {
				return element;
			}

			const flEl = await axios.get(element.url).then(resp => resp.data);

			const newFlEl = new OnePokeStandart(flEl);

			this.all[s + index] = newFlEl;
			return newFlEl;
		}));

		return [toRender, sortedAll.length];
	},

	async init() {
		if (!this.all.lenght) {
			const one = await axios.get('https://pokeapi.co/api/v2/pokemon', {
				params: {
					limit: 1,
				},
			});
			const countAll = one.data.count;

			const response = await axios.get('https://pokeapi.co/api/v2/pokemon', {
				params: {
					limit: countAll,
				},
			});
			this.all = response.data.results;
		}
	},

	async getCatchedPokes(limit, page, filter) {
		if (!this.all.length) {
			await PokeStore.init();
			return [];
		}

		const catchedAllPokemons = [...this.all].filter(el => el.catched);

		const filteredAll = catchedAllPokemons.filter(el => el.name.indexOf(filter.query) !== -1);

		function fff(a, b) {
			const fA = a[filter.sort];
			const sA = b[filter.sort];
			if (Number(fA) && Number(sA)) {
				return Number(fA) > Number(sA) ? 1 : -1;
			}

			if (typeof fA === 'string' && typeof sA === 'string') {
				return fA.localeCompare(sA);
			}
		}

		const sortedAll = [...filteredAll].sort(fff);

		const s = limit * (page - 1);
		const po = limit * page;

		const nema = sortedAll.slice(s, po).filter(u => !u.id);

		if (nema.length !== 0) {
			await Promise.all(nema.map(async element => {
				const flEl = await axios.get(element.url).then(resp => resp.data);
				const newFlEl = new OnePokeStandart(flEl);

				const index = sortedAll.indexOf(element);

				sortedAll[index] = newFlEl;
			}));
		}

		return [sortedAll.slice(s, po), sortedAll.length];
	},

	changeCatched(id) {
		const poke = this.all.find(u => u.id === id);
		poke.catched = !poke.catched;

		return poke;
	},

	// Async getOnePoke(id) {

	// },

};

export default PokeStore;

