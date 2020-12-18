import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { Spinner, Wave } from '../../components/atoms';
import { PokemonHeader, PokemonCardList } from '../../components/organisms';
import './LandingPage.scss';

export const LandingPage = () => {
	const [pokemonData, setPokemonData] = useState(null);
	const [offset, setOffset] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	const cancelToken = Axios.CancelToken.source();

	useEffect(() => {
		const fetchPokeData = async () => {
			try {
				setIsLoading(true);
				const responseData = await Axios.get(
					`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`,
					{
						cancelToken: cancelToken.token
					}
				).catch((thrown) => {
					if (Axios.isCancel(thrown)) {
						console.log(thrown.message);
					} else {
						console.log('Handle error');
					}
				});
				const {
					data: { results }
				} = responseData;
				console.log('Data fetched:', results);
				setPokemonData(results);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				console.log('ERROR___:', error);
			}
		};

		console.log('Offset__:', offset);

		fetchPokeData();

		return () => {
			console.log('Run cleanup in LandingPage');
			cancelToken.cancel();
			setIsLoading(false);
		};
	}, [offset]);

	const onNextClick = () => {
		setOffset(offset + 20);
	};
	const onPreviousClick = () => {
		if (offset !== 0) setOffset(offset - 20);
	};

	return (
		<>
			<div className="landingpage-container">
				{isLoading && (
					<Spinner asOverlay spinnerMessage="Fetching Pokemons..." />
				)}
				<PokemonHeader
					onNext={onNextClick}
					onPrevious={onPreviousClick}
					disabled={offset === 0}
				/>
				<div className="pokemon-data-container">
					{pokemonData && <PokemonCardList pokemons={pokemonData} />}
				</div>
			</div>
			<Wave />
		</>
	);
};
