import { lazy, Suspense } from 'react';
import { PhoneAPIResponse } from './models/api-response.model';

const Phones = lazy(() => import('./ui/phones/squares/squares'));

export default async function Page({
  searchParams
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';

  const getProducts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/products`, {
      next: { revalidate: 10 }
    });
    return res.json();
  };
  const phones: PhoneAPIResponse = await getProducts();
  return (
    <main>
      <Suspense fallback={null}>
        <Phones phones={phones.products} searchParams={{ query }} />
      </Suspense>
    </main>
  );
}
