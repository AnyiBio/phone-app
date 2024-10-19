import Link from 'next/link';
import Image from 'next/image';
import TextBox from './components/text-box/text-box';
import styles from './squares.module.css';

interface Phone {
  id: string;
  name: string;
  brand: string;
  basePrice: number;
  imageUrl: string;
}

interface PhoneAPIResponse {
  products: Phone[];
  ok: boolean;
  message: string;
}

export default async function Squares({}) {

  const getProducts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/products`,{
      next: { revalidate: 10}
    });
    return res.json();
  }
  const phones: PhoneAPIResponse = await getProducts();
  return (
      <div className={styles['phone-grid']}>
        {phones?.products.map((phone) => 
          (
            <Link href={`/phone-detail/${phone?.id}`} key={phone.id}>
              <div className={styles['phone-item']}>
                <div className={styles['phone-item__container']}>
                <Image
                  src={phone?.imageUrl}
                  width={100}
                  height={100}
                  className=""
                  alt="phone image"
                />
                </div>
                <TextBox name={phone.name} brand={phone.brand} basePrice={phone.basePrice}/>
                </div>
              </Link>
          ))
        }
      </div>
  );
}
