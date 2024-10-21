import { Suspense } from 'react';
import { ColorOptions, PhoneDetail, StorageOptions } from '@/app/models/product-detail.model';
import Card from '@/app/ui/phone-detail/card/card';
import ColorsList from '@/app/ui/phone-detail/color-list/color-list';
import MiniCardList from '@/app/ui/phone-detail/mini-card/mini-card';
import Table from '@/app/ui/phone-detail/table/table';
import { CardSkeleton } from '@/app/ui/skeletons';
import { Button } from '@/app/ui/phone-detail/button/button';
import styles from '@/app/ui/phone-detail/phone-detail.module.css';

interface PhoneAPIResponse {
  productDetail: PhoneDetail;
  ok: boolean;
  message: string;
}

const phoneOptionFirst = (opt: any) => {
  return opt && opt.length > 0 ? { ...opt[0] } : null;
};

const phoneDetailSelected = (
  phoneDetails: PhoneDetail,
  selectedStorage: StorageOptions,
  selectedColor: ColorOptions
) => {
  return {
    id: phoneDetails.id,
    name: phoneDetails.name,
    imageUrl: selectedColor.imageUrl,
    capacity: selectedStorage.capacity,
    price: selectedStorage.price,
    hexCode: selectedColor.hexCode,
    colorName: selectedColor.name,
    quantity: 0
  };
};

export default async function PhoneDetailPage({ params }: { params: { phoneId: string } }) {
  const id = params.phoneId;
  const getProductDetail = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/products/${id}`, {
      next: { revalidate: 10 }
    });
    if (!res.ok) {
      throw new Error('Failed to fetch phone details');
    }
    return res.json();
  };

  const phoneDetailsResponse: PhoneAPIResponse = await getProductDetail();
  const phoneImageByColor = phoneOptionFirst(phoneDetailsResponse.productDetail?.colorOptions);
  const phoneDetails: PhoneDetail = phoneDetailsResponse.productDetail;
  const phoneStorageOptions: StorageOptions[] = phoneDetailsResponse.productDetail?.storageOptions;
  const phoneColorsOptions: ColorOptions[] = phoneDetailsResponse.productDetail?.colorOptions;

  const selectedPhoneDetails = phoneDetailSelected(
    phoneDetails,
    phoneStorageOptions[0],
    phoneColorsOptions[0]
  );
  return (
    <>
      <section>
        <Suspense fallback={<CardSkeleton />}>
          <Card {...phoneImageByColor} />
        </Suspense>
        <div className={styles['box-detail']}>
          <div className="">
            <h2>{phoneDetails.name}</h2>
            <h2>{phoneDetails.basePrice} EUR</h2>
          </div>
          <Suspense fallback={null}>
            <MiniCardList storageOptions={phoneStorageOptions} />
          </Suspense>
          <Suspense fallback={null}>
            <ColorsList colorsOptions={phoneColorsOptions} />
          </Suspense>
          <Button navigateTo="/cart" data={selectedPhoneDetails}>
            AÑADIR
          </Button>
        </div>
      </section>
      <Table phoneDetails={phoneDetails} />
    </>
  );
}
