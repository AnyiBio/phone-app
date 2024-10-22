import { Phone } from './product-detail.model';

export interface PhoneAPIResponse {
  products: Phone[];
  ok: boolean;
  message: string;
}
