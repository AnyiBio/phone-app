export interface CartItem {
  id: string;
  name: string;
  imageUrl: string;
  capacity: string;
  price: number;
  hexCode: string;
  colorName: string;
  quantity: number;
}

export enum CartAction {
  ADD_ITEM = 'ADD_ITEM',
  GET_ALL_ITEMS = 'GET_ALL_ITEMS',
  REMOVE_ITEM = 'REMOVE_ITEM'
}
