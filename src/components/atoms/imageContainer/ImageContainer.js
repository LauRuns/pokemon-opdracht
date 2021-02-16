import React from 'react';
import './ImageContainer.scss';

const defaultStyles = { display: 'inline-block', verticalAlign: 'middle' };

export const ImageContainer = ({
	imgSource,
	altText,
	size,
	style,
	onClick
}) => {
	const styles = { ...defaultStyles, ...style };
	return (
		<div className="image-container">
			<img
				src={imgSource}
				alt={altText}
				style={styles}
				width={`${size || 'auto'}`}
				height={`${size || 'auto'}`}
				onClick={onClick}
			/>
		</div>
	);
};
