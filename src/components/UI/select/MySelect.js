import React from 'react';
import PropTypes from 'prop-types';
import './MySelect.css';

const MySelect = ({options, defaultValue, value, onChange}) => (
	<select
		className="MySelect"
		value={value}
		onChange={event => onChange(event.target.value)}

	>
		<option disabled value="">{defaultValue}</option>
		{options.map(option =>
			<option key={option.value} value={option.value} >
				{option.name}
			</option>,
		)}
	</select>
);

MySelect.propTypes = {
	options: PropTypes.array,
	defaultValue: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
};

export default MySelect;
