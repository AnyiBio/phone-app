'use client';

import { useReducer, createContext, Dispatch } from 'react';
import cartReducer from './cart-reducer';
import { CartItem } from '../models/cart-item.model';

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
  return <CartContext.Provider value={{ cart, dispatch }}>{children}</CartContext.Provider>;
};

export default CartContext;
