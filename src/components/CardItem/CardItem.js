import React from 'react';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './CardItem.css';
import MyButton from '../UI/button/MyButton';

import './CardItem.css';
import {catchPokemon, releasePokemon} from '../../store/actions';

const CardItem = props => {
	const dispatch = useDispatch();
	const {collection} = useSelector(state => state);
	const {card} = props;

	const navigate = useNavigate();

	const handleButtonClickChangeCatched = () => {
		dispatch(collection.has(card.id) ? releasePokemon(card.id) : catchPokemon(card.id));
	};

	const buttonText = collection.has(card.id) ? 'Отпустить' : 'Поймать';

	return (
		<div className="card">
			<div className="card__content">
				<div className="imageBG">

				</div>
				<div className="imageBox">
					<img src={card.picture} className="image" onClick={() => navigate(`/allPokemons/${card.id}`)}/>
				</div>
				<div className="card__text">
					<strong> ID: {card.id} {props.card.title} </strong>

					<div>
						Имя: {card.name}
					</div>
				</div>

			</div>
			<div className="card__btns">
				<MyButton
					onClick={handleButtonClickChangeCatched}
				>
					{buttonText}
				</MyButton>
			</div>

		</div>
	);
};

CardItem.propTypes = {
	card: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		name: PropTypes.string,
		picture: PropTypes.string,
		catched: PropTypes.bool,
	}),
};

export default CardItem;
