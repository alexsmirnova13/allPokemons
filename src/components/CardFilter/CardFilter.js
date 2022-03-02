import React from 'react';
import PropTypes from 'prop-types';

import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/select/MySelect';

const CardFilter = ({filter, setFilter}) => (
	<div>
		<MyInput
			value={filter.query}
			action={query => {
				setFilter({...filter, query});
			}}
			placeholder="Покемоиск"
		/>

		<MySelect
			value={filter.sort}
			onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
			defaultValue="Сортировка по"
			options={[
				{value: 'name', name: 'По имени'},
				{value: 'id', name: 'По id'},

			]}
		/>
	</div>
);

CardFilter.propTypes = {
	filter: PropTypes.shape({
		query: PropTypes.string,
		sort: PropTypes.string,
	}),
	setFilter: PropTypes.func.isRequired,
};

export default CardFilter;
