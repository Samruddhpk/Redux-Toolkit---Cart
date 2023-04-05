import Navbar from "./components/Navbar"
import CartContainer from "./components/CartContainer"
import Modal  from "./components/Modal"
import {useDispatch,useSelector} from "react-redux"
import {useEffect} from "react"
import {calculateTotals,getCartItems} from "./features/cart/cartSlice.js"


function App() {
const dispatch = useDispatch()
const {cartItems,isLoading} = useSelector((state)=>state.cart)
const {isOpen} = useSelector((state)=>state.modal)


useEffect(() => {
  dispatch(calculateTotals())
}, [cartItems])

useEffect(()=>{
dispatch(getCartItems())
},[])

  return (<>
    {isOpen && <Modal/>}
    <Navbar />
    <CartContainer />
  </>
  )
}
export default App;
