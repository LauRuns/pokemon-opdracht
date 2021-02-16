import React from 'react';

import { Button } from '../../atoms';
import './NavButtons.scss';

export const NavButtons = ({ onNext, onPrevious, disabled }) => {
	return (
		<div className="nav-buttons">
			<Button onClick={onPrevious} disabled={disabled}>
				Previous
			</Button>
			<Button onClick={onNext}>Next</Button>
		</div>
	);
};
