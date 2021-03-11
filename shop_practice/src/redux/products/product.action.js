import { v4 as uuid } from 'uuid';

const addProduct = product => {
  return {
    type: 'products/addProduct',
    payload: {
      ...product,
      id: uuid(),
    },
  };
};

const deleteProduct = id => {
  return {
    type: 'products/deleteProduct',
    payload: id,
  };
};

export { addProduct, deleteProduct };
