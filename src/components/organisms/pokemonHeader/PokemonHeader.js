import React from 'react';

import { ImageHeader, NavButtons } from '../../molecules';
import PokemonHeaderImage from '../../../assets/pokemon.png';
import './PokemonHeader.scss';

export const PokemonHeader = ({ onPrevious, onNext, disabled }) => {
	return (
		<div className="pokemon-header-container">
			<ImageHeader
				imgSource={PokemonHeaderImage}
				altText="Pokemon"
				style={{ width: '50%' }}
			/>
			<NavButtons onPrevious={onPrevious} onNext={onNext} disabled={disabled} />
		</div>
	);
};
