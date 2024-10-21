'use client';
import '@/app/ui/global.css';
import Header from './ui/header';
import cartReducer from '@/app/context/cart-reducer';
import { createContext, useReducer } from 'react';
import { CartProvider } from './context/cart-context';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <CartProvider>
        <body>
          <Header />
          {children}
        </body>
      </CartProvider>
    </html>
  );
}
