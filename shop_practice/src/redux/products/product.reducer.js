const initialState = {
  productItems: [],
  filter: '',
};
const productReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'products/addProduct':
      return {
        ...state,
        productItems: [...state.productItems, action.payload],
      };
    case 'products/deleteProduct':
      return {
        ...state,
        productItems: [
          ...state.productItems.filter(item => item.id !== action.payload),
        ],
      };

    default:
      return state;
  }
};

export default productReducer;
