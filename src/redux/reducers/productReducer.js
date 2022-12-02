import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

const initialSate = {
  cart: []
};

const productReducer = (state = initialSate, action) => {
  const selectProduct = state.cart.find(item => item.id === action.payload.id);
  switch (action.type) {
    case ADD_TO_CART:
      if (selectProduct) {
        const newCart = state.cart.filter(item => item.id !== selectProduct.id);
        selectProduct.quantity = selectProduct.quantity + 1;
        return {
          ...state,
          cart: [...newCart, selectProduct]
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      }
    default:
      return state;
  }
}

export default productReducer;