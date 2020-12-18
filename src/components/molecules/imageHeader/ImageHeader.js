import React from 'react';

import { ImageContainer } from '../../atoms';
import './ImageHeader.scss';

export const ImageHeader = ({
	children,
	imgSource,
	altText,
	style,
	imgSize,
	onClick
}) => {
	return (
		<div className="header-container">
			<ImageContainer
				imgSource={imgSource}
				altText={altText}
				style={style}
				size={imgSize}
				onClick={onClick}
			/>
			{children}
		</div>
	);
};
