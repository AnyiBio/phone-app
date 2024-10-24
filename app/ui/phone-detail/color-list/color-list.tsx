'use client';

import { useState } from 'react';
import { ColorOptions } from '@/app/models/product-detail.model';
import './color-list.css';

interface ColorsListProps {
  colorsOptions: ColorOptions[];
  selectedColor: string;
  onSelect: (color: string) => void;
}
export default function ColorsList({ colorsOptions, selectedColor, onSelect }: ColorsListProps) {
  const [hoveredColor, setHoveredColor] = useState('');


  const handleMouseEnter = (colorName: string) => {
    setHoveredColor(colorName);
  };

  const handleMouseLeave = () => {
    setHoveredColor('');
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
            onClick={() => onSelect(el.name)}
            onMouseEnter={() => handleMouseEnter(el.name)}
            onMouseLeave={handleMouseLeave}
          ></div>
        ))}
      </div>
      <span className="color-hover">{hoveredColor || selectedColor}</span>
    </>
  );
}
