import Image from 'next/image';

interface CardProps {
  name: string;
  hexCode: string;
  pickedImageColor: string;
}

export default async function Card({ ...phonesOptions }: CardProps) {
  return (
    <>
      <Image
        src={phonesOptions?.pickedImageColor}
        width={407}
        height={500}
        className=""
        alt="phone_image_detail"
      />
    </>
  );
}
