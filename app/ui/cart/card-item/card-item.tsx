'use client';

import { useContext } from 'react';
import CartContext from '@/app/context/cart-context';
import { CartAction } from '@/app/models/cart-item.model';
import Image from 'next/image';
import './card-item.css';

export default function CardItem() {
  const { cart, dispatch } = useContext(CartContext);

  const handelDeleteItem = (id: string) => {
    dispatch({ type: CartAction.REMOVE_ITEM, payload: { id } });
  };

  return (
    <>
      <h1 className="cart-item__title">CART ({cart.length})</h1>
      <div className="cart-item-container">
        {cart?.length
          ? cart.map((item) => (
              <div className="cart-item-container__item">
                <Image
                  src={item.imageUrl}
                  width={500}
                  height={500}
                  className=""
                  alt="phone_image_detail"
                />
                <div className="cart-item-container__info">
                  <div>
                    <p>{item.name}</p>
                    <p>
                      {item.capacity} | {item.colorName.toUpperCase()}
                    </p>
                    <p>{item.price} EUR</p>
                  </div>
                  <button className="cart-item__button" onClick={() => handelDeleteItem(item.id)}>
                    Eliminar
                  </button>
                </div>
              </div>
            ))
          : ''}
      </div>
    </>
  );
}
