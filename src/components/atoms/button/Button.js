import React from 'react';

import './Button.scss';

export const Button = ({ children, type, disabled, onClick, style, size }) => {
	return (
		<button
			type={type || 'button'}
			disabled={disabled}
			onClick={onClick}
			style={style}
			className={`button-container button--${size || 'md'}`}
		>
			{children}
		</button>
	);
};
