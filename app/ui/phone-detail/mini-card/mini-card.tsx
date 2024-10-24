import { StorageOptions } from '@/app/models/product-detail.model';
import './mini-card.css';

interface MiniCardProps {
  storageOptions: StorageOptions[];
  onSelect: (capacity: string) => void;
  selectedStorage: string;
}
export default function MiniCardList({ storageOptions, onSelect, selectedStorage }: MiniCardProps) {
  return (
    <>
      <p>STORAGE ¿HOW MUCH SPACE DO YOU NEED?</p>
      <div className="mini-card__container">
        {storageOptions?.map((el) => (
          <div
            className={`mini-card ${selectedStorage === el.capacity ? 'selected' : ''}`}
            key={el?.price}
            onClick={() => onSelect(el.capacity)}
          >
            <p>{el?.capacity}</p>
          </div>
        ))}
      </div>
    </>
  );
}
