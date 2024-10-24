'use client';

import '@/app/ui/global.css';
import Header from './ui/header';
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
