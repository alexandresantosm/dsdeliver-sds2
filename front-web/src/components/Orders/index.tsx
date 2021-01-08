import React from 'react';

import StepsHeader from './SetpsHeader';
import ProductsList from './ProductsList';

import './styles.css'


function Orders() {
  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductsList />
    </div>
  );
}

export default Orders;