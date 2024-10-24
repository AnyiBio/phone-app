'use client';

import { useEffect, useState } from 'react';
import { ColorOptions, StorageOptions, PhoneDetail } from '@/app/models/product-detail.model';
import MiniCardList from '@/app/ui/phone-detail/mini-card/mini-card';
import ColorsList from '@/app/ui/phone-detail/color-list/color-list';
import { Button } from '@/app/ui/phone-detail/button/button';
import styles from '@/app/ui/phone-detail/phone-detail.module.css';

interface ClientSidePhoneDetailProps {
  phoneDetails: PhoneDetail;
  phoneStorageOptions: StorageOptions[];
  phoneColorsOptions: ColorOptions[];
}

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

const ClientSidePhoneDetail: React.FC<ClientSidePhoneDetailProps> = ({
  phoneDetails,
  phoneStorageOptions,
  phoneColorsOptions
}) => {
    const [selectedStorage, setSelectedStorage] = useState<StorageOptions>(phoneStorageOptions[0]);
    const [selectedColor, setSelectedColor] = useState<ColorOptions>(phoneColorsOptions[0]);
    const [hasSelectedOption, setHasSelectedOption] = useState(false);
    const [selectedPhoneDetails, setSelectedPhoneDetails] = useState(phoneDetailSelected(phoneDetails, phoneStorageOptions[0], phoneColorsOptions[0]));
  
    const handleStorageSelect = (capacity: string) => {
      const storageOption = phoneStorageOptions.find((opt) => opt.capacity === capacity);
      if (storageOption) {
        setSelectedStorage(storageOption);
        setHasSelectedOption(true);
      }
    };
  
    const handleColorSelect = (color: string) => {
      const colorOption = phoneColorsOptions.find((opt) => opt.name === color);
      if (colorOption) {
        setSelectedColor(colorOption);
        setHasSelectedOption(true);
      }
    };
  
    useEffect(() => {
      setSelectedPhoneDetails({
        ...selectedPhoneDetails, 
        capacity: selectedStorage.capacity,
        price: selectedStorage.price,
        hexCode: selectedColor.hexCode,
        colorName: selectedColor.name 
      });
    }, [selectedColor, selectedStorage]);

  return (
    <div className={styles['box-detail']}>
      <div className="">
        <h2>{phoneDetails.name}</h2>
        <h2>{phoneDetails.basePrice} EUR</h2>
      </div>
      <MiniCardList
        storageOptions={phoneStorageOptions}
        selectedStorage={selectedStorage.capacity}
        onSelect={handleStorageSelect}
      />
      <ColorsList
        colorsOptions={phoneColorsOptions}
        selectedColor={selectedColor.name}
        onSelect={handleColorSelect}
      />
      <Button navigateTo="/cart" data={selectedPhoneDetails} disabled={!hasSelectedOption} className={hasSelectedOption ? '' : 'disabled'}>
        AÑADIR
      </Button>
    </div>
  );
};

export default ClientSidePhoneDetail;
