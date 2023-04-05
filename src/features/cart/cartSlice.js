import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import cartItems from "../../cartItems"


const url = 'https://course-api.com/react-useReducer-cart-project';


// initial State object
const initialState = {
    cartItems : cartItems,
    amount:0,
    total:0,
    isLoading:true,
}

//async calling of api for data of products
export const getCartItems = createAsyncThunk('cart/getCartItems',()=>{
    return fetch(url)
    .then((resp)=>resp.json())
    .catch((err)=>console.log(err))
})

const cartSlice = createSlice({
    name:'cart',
    initialState,
    //reducers
    reducers:{
        clearCart:(state)=>{
            state.cartItems = [] // clears cart once click on clear cart button
        },
        removeItem:(state,action)=>{
            const itemId = action.payload
            state.cartItems = state.cartItems.filter((item)=>item.id !== itemId)
        },
        increase:(state,{payload})=>{
            const cartItem = state.cartItems.find((item)=>item.id === payload.id)
            cartItem.amount = cartItem.amount+ 1
        },
        decrease: (state,{payload})=>{
            const cartItem = state.cartItems.find((item)=>item.id === payload.id)
            cartItem.amount = cartItem.amount - 1
        },
        calculateTotals:(state)=>{
            let amount = 0
            let total = 0
            state.cartItems.forEach((item)=>{
                amount += item.amount
                total +=item.amount * item.price
            })
            state.amount = amount
            state.total = total
        }
    },
    extraReducers:{
        //pending
    [getCartItems.pending]:(state)=>{
        state.isLoading = true
    },
    [getCartItems.fulfilled]:(state,action)=>{
        state.isLoading = false
    },
    [getCartItems.rejected]:(state)=>{
        state.isLoading = false
    }
    
    },
})


console.log(cartSlice)
export const {clearCart,removeItem,increase,decrease,calculateTotals} = cartSlice.actions
export default cartSlice.reducer