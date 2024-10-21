import { CartAction, CartItem } from '../models/cart-item.model';

type CartActionType =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'GET_ALL_ITEMS'; payload: CartItem[] }
  | { type: 'REMOVE_ITEM'; payload: { id: string } };

const cartReducer = (state: CartItem[], action: CartActionType) => {
  switch (action.type) {
    case CartAction.ADD_ITEM:
      const updatedCart = [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          imageUrl: action.payload.imageUrl,
          capacity: action.payload.capacity,
          hexCode: action.payload.hexCode,
          colorName: action.payload.colorName,
          quantity: action.payload.quantity
        }
      ];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;

    case CartAction.GET_ALL_ITEMS:
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : state;

    case CartAction.REMOVE_ITEM:
      const deleteItemFromCart = state.filter((item) => item.id !== action.payload.id);
      localStorage.setItem('cart', JSON.stringify(deleteItemFromCart));
      return deleteItemFromCart;

    default:
      return state;
  }
};

export default cartReducer;
