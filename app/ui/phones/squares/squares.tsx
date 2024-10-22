'use client';

import Link from 'next/link';
import Image from 'next/image';
import TextBox from './components/text-box/text-box';
import Search from '../../search';
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
                      width={100}
                      height={257}
                      className={styles['phone-item__image']}
                      alt="phone image"
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
