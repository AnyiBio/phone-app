'use client';

import { ColorOptions } from '@/app/models/product-detail.model';
import { useState } from 'react';
import './color-list.css';

interface ColorsListProps {
  colorsOptions: ColorOptions[];
}
export default function ColorsList({ colorsOptions }: ColorsListProps) {
  const [selectedColor, setSelectedColor] = useState<string>('');

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <>
      <p>COLOR. PICK YOUR FAVOURITE.</p>
      <div className="colors-list__container">
        {colorsOptions?.map((el) => (
          <div
            key={el.hexCode}
            className={`color-square ${selectedColor === el.name ? 'selected' : ''}`}
            style={{ backgroundColor: el.hexCode }}
            onClick={() => handleColorClick(el.name)}
          ></div>
        ))}
      </div>
      <span>{selectedColor}</span>
    </>
  );
}
