import React from 'react';

import './Card.scss';

export const Card = ({ children, style, onClick }) => {
	return (
		<div className="card-container" style={style} onClick={onClick}>
			{children}
		</div>
	);
};
