import { Suspense } from 'react';
import styles from '@/app/ui/phone-detail/phone-detail.module.css';

export default async function PhoneDetailPage({}) {
  return (
    <section>
      <div className="flex flex-row">
        <Suspense fallback={null}></Suspense>
        <div className={styles['box-detail']}></div>
      </div>
    </section>
  );
}
