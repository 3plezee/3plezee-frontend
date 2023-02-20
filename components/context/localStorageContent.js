
import {useState, createContext} from 'react'

function LocalStorage(params) {
    const [cart, setCart] = useState({content:[], amount:0})
    // if(localStorage?.getItem('cart') === null){
    //     localStorage.setItem('cart', JSON.stringify({"content":[],"amount":0}))
        
    //   }
    //   else{
    //     let localCart = localStorage.getItem('cart')
    //     const cart = JSON.parse(localCart);
    //     setCart(cart)
    
    //   }
      
    const data ={
        cart:cart,
        setCart:setCart
    }
    return data
}
export default LocalStorage;