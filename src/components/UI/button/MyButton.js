import React from 'react';
import PropTypes from 'prop-types';

import './MyButton.css';

const MyButton = ({children, ...props}) => (
	<button {...props} className="myBtn">
		{children}
	</button>
);

MyButton.propTypes = {
	children: PropTypes.any,
	props: PropTypes.any,
};

export default MyButton;
