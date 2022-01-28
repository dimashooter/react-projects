import React from 'react';
import starImg from '../images/star.png';

const Stars = ({ count }) => {
	return (
		<div className="star">
			{Array(count)
				.fill(count)
				.map((_, i) => (
					<img key={`${i}  ${count} `} src={starImg} alt="Star" />
				))}
		</div>
	);
};

export default Stars;
