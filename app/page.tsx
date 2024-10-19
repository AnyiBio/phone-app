import { lazy, Suspense } from 'react';

const Phones = lazy(() => import('./ui/phones/squares/squares'));

export default function Page() {
  return (
    <main>
      <Suspense fallback={null}>
        <Phones />
      </Suspense>
    </main>
  );
}
