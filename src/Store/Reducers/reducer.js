const initialState = {
  cart: [],
  url: '1',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'DELETE_CART':
      return {
        ...state,
        cart: [],
      };
    case 'SET_URL':
      return { ...state, url: action.payload };
    case 'REMOVE_SINGLE':
      return {
        ...state,
        cart: state.cart.filter((elem) => elem.itemId !== action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};
export default reducer;
