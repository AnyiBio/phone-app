'use client';

import { useReducer, createContext, Dispatch, useEffect } from 'react';
import cartReducer from './cart-reducer';
import { CartAction, CartItem } from '../models/cart-item.model';

interface CartContextType {
  cart: CartItem[];
  dispatch: Dispatch<any>;
}

const inialState = {
  cart: [],
  dispatch: () => {}
};

const CartContext = createContext<CartContextType>(inialState);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      dispatch({ type: CartAction.GET_ALL_ITEMS, payload: [] });
    }
  }, []);

  return <CartContext.Provider value={{ cart, dispatch }}>{children}</CartContext.Provider>;
};

export default CartContext;
