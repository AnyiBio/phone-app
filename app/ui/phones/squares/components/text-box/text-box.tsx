import styles from './text-box.module.css';

interface TextBox {
  name: string;
  brand: string;
  basePrice: number;
}

export default async function TextBox({ ...textBoxProps }: TextBox) {
  return (
    <>
      <p className={styles['text-brand']}>{textBoxProps.name}</p>
      <div className={styles['text-detail']}>
        <p>{textBoxProps.brand}</p>
        <p>{textBoxProps.basePrice}EUR</p>
      </div>
    </>
  );
}
