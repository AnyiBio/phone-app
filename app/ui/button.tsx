'use client';

import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import './button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  navigateTo?: string;
}

export function Button({ children, className, navigateTo, ...rest }: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (navigateTo) {
      router.push(navigateTo);
    }
  };

  return (
    <button {...rest} onClick={handleClick} className={clsx('button', className)}>
      {children}
    </button>
  );
}
