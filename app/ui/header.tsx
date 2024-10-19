import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import styles from './header.module.css';
import MBSTLogo from '@/public/logo.svg';

export default function Header() {
  return (
    <header className={styles.header}>
        <Link href="/">
            <Image
                src={MBSTLogo}
                alt="MBST logo"
                width={100}
                height={100}
                className={styles.image}
            />
        </Link>
        <ShoppingBagIcon className={styles["header-icon"]} />
    </header>
  );
}

