const initialState ={
    productItems:[]
}

const productReducer =(state=initialState, action)=> {
    console.log(action);
    switch (action.type) {
        case 'products/addProduct':
            
            return{productItems:[...state.productItems, action.payload]};
    
        default:
            return state;
    }



}

export default productReducer