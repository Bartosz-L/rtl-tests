import React from 'react';
import { useOrderDetails } from '../../contexts/OrderDetails';
import Options from './Options';

const OrderEntry = () => {
  const [orderDetails] = useOrderDetails();

  return (
    <div>
      <h1>Design your Ice Creams</h1>
      <Options optionType='scoops' />
      <Options optionType='toppings' />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
    </div>
  );
};

export default OrderEntry;
