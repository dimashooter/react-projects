import React from 'react';
import tumbaImg from '../images/tumba.png';
import Stars from './Stars';

const formatPrice = price =>
  price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

const Products = ({ el }) => {
    if(el.rating > 5){
        el.rating = 5
    }
  return (
    <div className="product_item">
      <img
        className="product-image"
        width="148"
        src={tumbaImg}
        alt="Тумба"
      />
      <h5>{el.title}</h5>
        <div className='stars__wrapper'>
            <Stars count={Math.floor(el.rating)} /> <span>{el.rating}</span>
        </div>

      <div className="price_wrapper">
        <div className="price__new">
          {formatPrice(el.price.new)} Р
        </div>
        <div className="price__old">
          {formatPrice(el.price.old)} Р
        </div>
      </div>

      <div>{el.color}</div>
      <div>{el.material}</div>
      <div>{el.size}</div>
      <div>{el.mechanism}</div>
      <div>{el.seller}</div>
    </div>
  );
};

export default Products;
