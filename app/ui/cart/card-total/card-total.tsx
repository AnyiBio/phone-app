'use client';

import { useContext, useEffect, useState } from 'react';
import CartContext from '@/app/context/cart-context';
import './card-total.css';

export default function CardTotal() {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!!cart.length) {
      const calculateTotal = cart.reduce((ack: number, item) => ack + item.price * item.price, 0);
      setTotal(calculateTotal);
    }
  }, []);

  return (
    <div className="card-total">
      <span>{`TOTAL  ${total} EUR`}</span>
    </div>
  );
}
