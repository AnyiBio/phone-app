import { Suspense } from 'react';
import { PhoneDetail, StorageOptions, ColorOptions } from '@/app/models/product-detail.model';
import Card from '@/app/ui/phone-detail/card/card';
import ClientSidePhoneDetail from '@/app/ui/phone-detail/phone-detail';
import Table from '@/app/ui/phone-detail/table/table';
import { CardSkeleton } from '@/app/ui/skeletons';

interface PhoneAPIResponse {
  productDetail: PhoneDetail;
  ok: boolean;
  message: string;
}

const phoneOptionFirst = (opt: any) => {
  return opt && opt.length > 0 ? { ...opt[0] } : null;
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

  return (
    <>
      <section>
        <Suspense fallback={<CardSkeleton />}>
          <Card {...phoneImageByColor} />
        </Suspense>
        <ClientSidePhoneDetail
          phoneDetails={phoneDetails}
          phoneStorageOptions={phoneStorageOptions}
          phoneColorsOptions={phoneColorsOptions}
        />
      </section>
      <Table phoneDetails={phoneDetails} />
    </>
  );
}
