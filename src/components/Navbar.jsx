import React from 'react'
import {CartIcon,BankNotes} from "../icons.jsx"
import {useSelector} from "react-redux"



const Navbar = () => {
  // const amount = useSelector((state)=>state.cart.amount) 
  //OR  can destructure directly
  const {amount} = useSelector((state)=>state.cart)
  return (
    <nav>
    <div className = "nav-center">
    <h3>shoppy-redux</h3>
    <div className="nav-container">
        {/* <BankNotes/> */}
        <CartIcon/>
        <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
    </div>
    </div>
    </nav>
  )
}

export default Navbar