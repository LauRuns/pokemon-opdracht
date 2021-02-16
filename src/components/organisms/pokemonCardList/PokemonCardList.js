import React from 'react';

import { PokemonCard } from '../../molecules';
import './PokemonCardList.scss';

export const PokemonCardList = ({ pokemons }) => {
	return (
		<div className="pokemon-card-list">
			{pokemons &&
				pokemons.map(({ name, url }) => {
					return <PokemonCard key={name} name={name} url={url} />;
				})}
		</div>
	);
};
