import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import MyButton from '../button/MyButton';
import './MyInput.css';

const MyInput = props => {
	const ref = useRef();
	const handleButtonClick = () => {
		const query = ref.current.value;
		props.action(query);
	};

	return (
		<div>
			<input className="MyInput" placeholder="Покемоиск" ref={ref} />
			<MyButton onClick={handleButtonClick}>Найти</MyButton>
		</div>

	);
};

MyInput.propTypes = {
	action: PropTypes.func,
};

export default MyInput;
