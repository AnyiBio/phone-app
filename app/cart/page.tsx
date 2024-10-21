import { Suspense } from 'react';
import CardItem from '../ui/cart/card-item/card-item';
import { Button } from '../ui/button';
import CardTotal from '../ui/cart/card-total/card-total';
import '@/app/ui/cart/cart.css';

export default async function CartPage({}) {
  return (
    <div className="cart-page">
      <Suspense fallback={null}>
        <CardItem />
      </Suspense>
      <div className="cart-footer">
        <Button className="shopping">
          <span>CONTINUE SHOPPING</span>
        </Button>
        <CardTotal />
        <Button className="pay">
          <span>PAY</span>
        </Button>
      </div>
    </div>
  );
}
