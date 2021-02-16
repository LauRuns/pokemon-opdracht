import React from 'react';

import { SmallCard } from '../../atoms';
import './Ability.scss';

export const Ability = ({ abilities }) => {
	return (
		<>
			{abilities &&
				abilities.map(({ ability: { name } }) => {
					return (
						<SmallCard key={name}>
							<h4>
								<code>{name}</code>
							</h4>
						</SmallCard>
					);
				})}
		</>
	);
};
