import React from 'react';

import './Spinner.scss';

export const Spinner = ({ asOverlay, spinnerMessage }) => {
	return (
		<div className={`${asOverlay && 'spinner__overlay'}`}>
			<div className="spinner"></div>
			<p>{spinnerMessage}</p>
		</div>
	);
};
