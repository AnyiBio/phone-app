import { StorageOptions } from '@/app/models/product-detail.model';
import './mini-card.css';

interface MiniCardProps {
  storageOptions: StorageOptions[];
}
export default async function MiniCardList({ storageOptions }: MiniCardProps) {
  return (
    <>
      <p>STORAGE ¿HOW MUCH SPACE DO YOU NEED?</p>
      <div className="mini-card__container">
        {storageOptions?.map((el) => (
          <div className="mini-card">
            <p>{el?.capacity}</p>
          </div>
        ))}
      </div>
    </>
  );
}
