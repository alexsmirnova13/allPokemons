import React from 'react';
import {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {setKek, setLul} from '../store/actions';

const Kekducer = () => {
	const dispatch = useDispatch();

	const {kek, lul} = useSelector(store => store);
	const kekRef = useRef();
	const lulRef = useRef();

	const handleKekChange = () => {
		const newKek = kekRef.current.value;
		dispatch(setKek(newKek));
	};

	const handleLulChange = () => {
		const newLul = lulRef.current.value;
		dispatch(setLul(newLul));
	};

	return (
		<div>
			<h1>
				{kek}
			</h1>
			<input ref={kekRef}/>
			<button onClick={handleKekChange}>
                Change kek
			</button>
			<h1>
				{lul}
			</h1>
			<input ref={lulRef}/>
			<button onClick={handleLulChange}>
                Change lul
			</button>

		</div>
	);
};

export default Kekducer;
