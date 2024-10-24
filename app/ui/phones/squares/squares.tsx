'use client';

import Link from 'next/link';
import Image from 'next/image';
import TextBox from '../text-box/text-box';
import Search from '@/app/ui/search';
import { Phone } from '@/app/models/product-detail.model';
import styles from './squares.module.css';

interface SquaresProps {
  phones: Phone[];
  searchParams?: {
    query?: string;
  };
}

export default function Squares({ phones, searchParams }: SquaresProps) {
  const query = searchParams?.query ?? '';

  const filteredPhones = phones.filter(
    (el) =>
      el.name.toLowerCase().includes(query.toLowerCase()) ||
      el.brand.toLowerCase().includes(query.toLowerCase())
  );

  const getImageClass = (brand: string) => {
    const brandLower = brand.toLowerCase();

    if (brandLower.includes('apple')) {
      return styles['apple-image'];
    } else if (brandLower.includes('xiaomi')) {
      return styles['xiaomi-image'];
    } else {
      return styles['phone-item__image'];
    }
  };

  return (
    <>
      <Search placeholder="Search for a smartphone..." />
      <p className={styles['result-search']}>{filteredPhones.length} RESULTS</p>
      <div className={styles['phone-grid']}>
        {filteredPhones?.length
          ? filteredPhones.map((phone) => (
              <Link href={`/phone-detail/${phone?.id}`} key={phone.id}>
                <div className={styles['phone-item']}>
                  <div className={styles['phone-item__container']}>
                    <Image
                      src={phone?.imageUrl || ''}
                      width={0}
                      height={0}
                      className={getImageClass(phone.brand)}
                      alt="phone image"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  <TextBox name={phone.name} brand={phone.brand} basePrice={phone.basePrice} />
                </div>
              </Link>
            ))
          : ''}
      </div>
    </>
  );
}
