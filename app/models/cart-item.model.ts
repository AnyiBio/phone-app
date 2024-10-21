export interface CartItem {
  id: string;
  name: string;
  capacity: string;
  price: number;
  hexCode: string;
  colorName: string;
  quantity: number;
}

export enum CartAction {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM'
}
