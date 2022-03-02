import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getPokemons} from './store/actions';
import {BrowserRouter} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import AppRouter from './components/AppRouter/AppRouter';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPokemons());
	}, []);
	return (
		<BrowserRouter>
			<Navbar/>
			<AppRouter/>
			<Footer/>
		</BrowserRouter>
	);
}

export default App;
