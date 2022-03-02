import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import CatchedPokemons from '../../pages/CatchedPokemons';
import AllPokemons from '../../pages/AllPokemons';
import CardIdPage from '../../pages/CardIdPage';

const AppRouter = () => (
	<Routes>
		<Route exact path="/allPokemons" element={<AllPokemons />} />
		<Route path="/collected" element={<CatchedPokemons />} />
		<Route path="*" element={<Navigate to="/allPokemons" replace />} />
		<Route exact path="/allPokemons/:id" element={<CardIdPage />} />
	</Routes>
);

export default AppRouter;
