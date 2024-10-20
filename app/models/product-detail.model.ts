export interface Phone {
  id: string;
  brand: string;
  name: string;
  basePrice: number;
  imageUrl: string;
}

export interface PhoneDetail {
  id: string;
  brand: string;
  name: string;
  description: string;
  basePrice: number;
  rating: number;
  specs: {
    screen: string;
    resolution: string;
    processor: string;
    mainCamera: string;
    selfieCamera: string;
    battery: string;
    os: string;
    screenRefreshRate: string;
  };
  colorOptions: ColorOptions[];
  storageOptions: StorageOptions[];
  similarProducts: Phone[];
}

export interface ColorOptions {
  name: string;
  hexCode: string;
  imageUrl: string;
}

export interface StorageOptions {
  capacity: string;
  price: number;
}
