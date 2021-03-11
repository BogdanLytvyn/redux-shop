import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import productReducer from './products/product.reducer'


const store = createStore(productReducer, composeWithDevTools())


// const store = createStore(()=>({
//     key: 'Hello'
// }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store