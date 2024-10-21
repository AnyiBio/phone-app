import { CartAction, CartItem } from '../models/cart-item.model';

const cartReducer = (state: CartItem[], action: { type: any; payload: any }) => {
  switch (action.type) {
    case CartAction.ADD_ITEM:
      const updatedCart = [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          capacity: action.payload.capacity,
          hexCode: action.payload.hexCode,
          colorName: action.payload.colorName,
          quantity: action.payload.quantity
        }
      ];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;

    case CartAction.REMOVE_ITEM:
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

export default cartReducer;
