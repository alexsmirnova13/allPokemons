import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CardFilter from '../components/CardFilter/CardFilter';
import CardsList from '../components/CardsList/CardList';

import Pagination from '../components/UI/pagination/Pagination';

import {getFullPokemons} from '../store/actions';

function CatchedPokemons() {
	const dispatch = useDispatch();

	const {all, collection} = useSelector(store => store);

	const [pokemons, setPokemons] = useState([]);
	const [filter, setFilter] = useState({sort: 'id', query: ''});
	const [totalPages, setTotalPages] = useState(0);

	useEffect(() => {
		const newPokemons = all.filter(u => collection.has(u.id)).filter(u => u.name.indexOf(filter.query) !== -1).sort((a, b) => {
			const valueA = Number(a[filter.sort]) || a[filter.sort];
			const valueB = Number(b[filter.sort]) || b[filter.sort];
			return valueA > valueB ? 1 : -1;
		});
		setPokemons(newPokemons);
	}, [filter, all, collection]);

	// Const [limit, setLimit] = useState(24);

	const [page, setPage] = useState(1);
	// Const currentStore=PokeStore.all
	const changePage = page => {
		setPage(page);
	};

	const limit = 24;
	// Const [fetchCards, isCardsLoading, cardError] = useFetching(async () => {
	// 	const [rslt, lenghtOfSorted] = await PokeStore.getPokes(limit, page, filter);
	// 	setTotalPages(Math.ceil(lenghtOfSorted / limit));
	// 	if (totalPages < page) {
	// 		setPage(1);
	// 	}

	// 	setCards(rslt);
	// });

	// Const pokemonsToRender = pokemons.slice((page - 1) * limit, page * limit);

	const getPokemonsToRender = pokemonsArr => {
		const pokemonsToRender = pokemonsArr.slice((page - 1) * limit, page * limit);
		const pokemonsToLoad = pokemonsToRender.filter(u => !u.isLoaded);
		if (pokemonsToLoad.length) {
			dispatch(getFullPokemons);
		}

		return pokemonsToRender;
	};

	const pokemonsToRender = getPokemonsToRender(pokemons);

	useEffect(() => {
		const newTotalPages = Math.ceil(pokemons.length / limit);
		setTotalPages(newTotalPages);
	}, [pokemons, page, filter]);

	return (
		<div className="App">

			<CardFilter
				filter={filter}
				setFilter={setFilter}
			/>
			<CardsList cards={pokemonsToRender} title="Все покемоны"/>
			<Pagination
				totalPages={totalPages}
				page={page}
				changePage={changePage}
			/>

		</div>
	);
}

export default CatchedPokemons;
