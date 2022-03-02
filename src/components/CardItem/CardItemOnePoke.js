import React from 'react';
import PropTypes from 'prop-types';
import MyButton from '../UI/button/MyButton';
import './CardItemOnePoke.css';
import {useDispatch, useSelector} from 'react-redux';
import {catchPokemon, releasePokemon} from '../../store/actions';

const CardItemOnePoke = props => {
	const dispatch = useDispatch();
	const {collection} = useSelector(state => state);
	const {card} = props;

	const handleButtonClickChangeCatched = () => {
		dispatch(collection.has(card.id) ? releasePokemon(card.id) : catchPokemon(card.id));
	};

	const buttonText = collection.has(card.id) ? 'Отпустить' : 'Поймать';
	console.log(card.types);
	return (
		<div className="onePokeCard">
			<div className="onePokeCardContent">
				<div className="onePokeImageBox">
					<img src={card.picture} className="image"/>
				</div>
				<div className="onePokeCardText">
					<strong> ID Покемонеса:  {card.id} {card.title} </strong>

					<div>
                        Имя покемонеса: {card.name}
					</div>

					<div>
                        Скиллы:
						{card.types.map(type =>
							<li key={1}>{type} </li>,
						)}
					</div>

					<div>
                        Вес: {card.weight}
					</div>

					<div>
                        Базовый опыт: {card.baseExperience}
					</div>

					<div>
                        Рост: {card.height}
					</div>
				</div>

			</div>
			<div className="onePokeCardBtns">
				<MyButton
					onClick={handleButtonClickChangeCatched}
				>
					{buttonText}
				</MyButton>
			</div>

		</div>
	);
};

CardItemOnePoke.propTypes = {
	card: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		name: PropTypes.string,
		height: PropTypes.number,
		weight: PropTypes.number,
		types: PropTypes.array,
		baseExperience: PropTypes.number,
		picture: PropTypes.string,
		catched: PropTypes.bool,
	}),
};

export default CardItemOnePoke;
