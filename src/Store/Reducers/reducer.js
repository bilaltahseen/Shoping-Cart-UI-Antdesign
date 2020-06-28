const initialState = {
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return {
        ...state,
      };
  }
};
export default reducer;
