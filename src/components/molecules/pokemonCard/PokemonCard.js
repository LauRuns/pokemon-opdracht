import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { Card, Header, ImageContainer } from '../../atoms';
import { Ability } from '../ability/Ability';

import './PokemonCard.scss';

export const PokemonCard = ({ url, name }) => {
	const [avatar, setAvatar] = useState(null);
	const [moves, setMoves] = useState(0);
	const [weight, setWeight] = useState(0);
	const [abilities, setAbilities] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	const cancelToken = Axios.CancelToken.source();

	useEffect(() => {
		const fetchCardData = async () => {
			try {
				setIsLoading(true);

				const responseData = await Axios.get(`${url}`, {
					cancelToken: cancelToken.token
				}).catch((thrown) => {
					if (Axios.isCancel(thrown)) {
						console.log(thrown.message);
					} else {
						console.log('Handle error');
					}
				});

				const {
					data: {
						abilities,
						weight,
						moves,
						sprites: { front_default }
					}
				} = responseData;
				setAbilities(abilities);
				setWeight(weight);
				setMoves(moves.length);
				setAvatar(front_default);
				setIsLoading(false);
			} catch (error) {
				console.log('ERROR___Pokemoncard__:', error);
				setIsLoading(false);
			}
		};

		fetchCardData();

		return () => {
			console.log('Cleanup Pokemoncard');
			setIsLoading(false);
		};
	}, [url]);

	return (
		<>
			{!isLoading && (
				<Card>
					<div className="pokemon-card">
						<Header title={name} center md />
						<ImageContainer imgSource={avatar} />
						<h3>Moves: {moves}</h3>
						<br />
						<h3>Weight: {weight}</h3>
						<br />
						<h3>Abilities:</h3>
						<Ability abilities={abilities} />
					</div>
				</Card>
			)}
		</>
	);
};
