import React from 'react';

const Product = (props) => {
  return (
    <>
      <div className='product'>
        <img src={props.item.img} className='product-img'/>
        <div className='product-description'>
          <div>
            <h4>{props.item.name}</h4>
            <p>Lorem ipsum dolor sit amet очень карсивы красовк</p>
          </div>
          <div>
            <button className='product-details'>Детали</button>
          </div>
        </div>
        <div className='description2'>
          <hr/>
          <button>Добавить в корзину</button>
        </div>
      </div>
    </>
  );
};

export default Product;