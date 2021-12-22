import React from 'react';
import Product from './Product';

const Products = (props) => {
  return (
    <div className='products'>
      {props.base.map((item) => {
        return (<Product item={item}/>)
      })}
    </div>
  );
};

export default Products;