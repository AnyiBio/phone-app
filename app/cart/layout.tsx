'use client';

import BackButton from '../ui/back-button';
import styles from '@/app/ui/phone-detail/phone-detail.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-[80px]">
      <BackButton />
      <div className={styles['layout-container']}>{children}</div>
    </div>
  );
}
