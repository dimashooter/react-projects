import React, { useCallback, useRef } from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Products from '../Components/Products';

const prod = Array(30)
	.fill(0)
	.map(() => ({
		title: 'Тумба прикроватная Rubus с двумя ящиками',
		rating: Number((Math.random() * 5 + 1).toFixed(2)),

		price: {
			new: Math.round(Math.random() * 100000),
			old: Math.round(Math.random() * 100000),
			hot: !!Math.round(Math.random() * 1),
		},
		color: 'Черный',
		material: 'Ткань',
		size: 'ш. 349 х в. 234 х г. 323',
		mechanism: 'Французская раскладушк',
		seller: 'Laska Family',
	}));

const InMyRoom = () => {
	const [count, setCount] = useState(10);

	const productItemsRef = useRef(null);

	const scrollHandler = useCallback(e => {
		if (e.target) {
			const isEnd = e.target.scrollWidth - e.target.scrollLeft - 250 <= e.target.clientWidth;
			if (isEnd) {
				setCount(prev => prev + 1);
			}
		}
	}, []);

	useEffect(() => {
		const { current } = productItemsRef;
		if (current && count >= prod.length) {
			current.removeEventListener('scroll', scrollHandler);
		}
	}, [count, scrollHandler]);

	useEffect(() => {
		const { current } = productItemsRef;

		current.addEventListener('scroll', scrollHandler);

		return () => {
			current.removeEventListener('scroll', scrollHandler);
		};
	}, [scrollHandler]);

	return (
		<div>
			<div className="products__wrapper">
				<ul className="columns columns--first">
					<li></li>
					<li>Рейтинг</li>
					<li>Цена</li>
					<li>Цвет</li>
					<li>Материал</li>
					<li>Размеры</li>
					<li>Механизм</li>
					<li>Продавец</li>
				</ul>
				<div className="product__items-block" ref={productItemsRef}>
					{prod.slice(0, count).map((el, index) => (
						<Products key={`${index} + ${el.color}`} el={el} />
					))}
				</div>
			</div>
		</div>
	);
};
export default InMyRoom;
