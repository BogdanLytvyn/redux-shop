const addProduct = (product)=> {
    return {
        type: 'products/addProduct',
        payload: product
    }
}

export {addProduct}