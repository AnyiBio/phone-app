'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import CartContext from '../context/cart-context';
import clsx from 'clsx';
import './button.css';
import { CartItem, CartAction } from '../models/cart-item.model';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  navigateTo?: string;
  data?: CartItem;
}

export function Button({ children, className, navigateTo, data }: ButtonProps) {
  const router = useRouter();
  const { dispatch } = useContext(CartContext);

  const handleClick = () => {
    if (navigateTo) {
      router.push(navigateTo);
      dispatch({ type: CartAction.ADD_ITEM, payload: { ...data, quantity: 1 } });
    }
  };

  return (
    <button onClick={handleClick} className={clsx('button', className)}>
      {children}
    </button>
  );
}
