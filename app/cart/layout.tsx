'use client';

import BackButton from '../ui/back-button';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-[80px]">
      <div>{children}</div>
    </div>
  );
}
