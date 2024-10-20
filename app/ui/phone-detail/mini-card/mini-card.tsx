'use client';

import { useState } from 'react';
import { StorageOptions } from '@/app/models/product-detail.model';
import './mini-card.css';

interface MiniCardProps {
  storageOptions: StorageOptions[];
}
export default function MiniCardList({ storageOptions }: MiniCardProps) {
  const [selectedStorage, setSelectedStorage] = useState<string>('');

  const handleStorageClick = (capacity: string) => {
    setSelectedStorage(capacity);
  };

  return (
    <>
      <p>STORAGE ¿HOW MUCH SPACE DO YOU NEED?</p>
      <div className="mini-card__container">
        {storageOptions?.map((el) => (
          <div
            className={`mini-card ${selectedStorage === el.capacity ? 'selected' : ''}`}
            key={el?.price}
            onClick={() => handleStorageClick(el.capacity)}
          >
            <p>{el?.capacity}</p>
          </div>
        ))}
      </div>
    </>
  );
}
