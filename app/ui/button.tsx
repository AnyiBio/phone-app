'use client';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import './button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className: string;
}

export function Button({ children, className }: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <button onClick={handleClick} className={clsx('button', className)}>
      {children}
    </button>
  );
}
