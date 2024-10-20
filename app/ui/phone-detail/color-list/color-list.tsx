import { ColorOptions } from '@/app/models/product-detail.model';
import './color-list.css';

interface ColorsListProps {
  colorsOptions: ColorOptions[];
  pickedColorName: string;
}
export default async function ColorsList({ colorsOptions, pickedColorName }: ColorsListProps) {
  return (
    <>
      <p>COLOR. PICK YOUR FAVOURITE.</p>
      <div className="colors-list__container">
        {colorsOptions?.map((el) => (
          <div
            key={el.hexCode}
            className="colors-list"
            style={{ backgroundColor: el.hexCode }}
          ></div>
        ))}
      </div>
      <span>{pickedColorName}</span>
    </>
  );
}
