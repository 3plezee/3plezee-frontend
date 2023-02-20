import { createContext, useReducer } from "react";
import CartController from "../cartController";
import Cookies from 'universal-cookie';
import WishListController from "../cartController/wishListController";
 
const cookies = new Cookies();
export const storeContext = createContext();

const initialState = {

cart :  { content: [], amount: 0 },
wishlist :  { content: [], amount: 0 },
orderNote: undefined


};
function reducer(state, action) {
    const payload = action.payload
  switch (action.type) {
    case "CART_ADD_ITEM": {
      
        let cartContent = CartController('add', payload)
    
        return { ...state, cart: cartContent };
    }
    case "CART_REMOVE_ITEM": {
        let cartContent = CartController('remove', payload)
    
    return { ...state, cart: cartContent };
    }
    case "CART_DELETE_ITEM": {
        let cartContent = CartController('delete', payload);
        return { ...state, cart: cartContent };
      
    }
    case "WISHLIST_ITEM": {
      let wishlistContent = WishListController(payload);
      return { ...state, wishlist: wishlistContent };
    
  }
    case "SET_CART": {
        // let cartContent = CartController('delete', payload);
        let cartContent = JSON.parse(localStorage?.getItem("cart")) ?? { content: [], amount: 0 }
        return { ...state, cart: cartContent };
      
    }
    case "RESET_CART": {
      // let cartContent = CartController('delete', payload);
      let cartContent = { content: [], amount: 0 }
      localStorage.setItem('cart', JSON.stringify(cartContent))
      return { ...state, cart: cartContent };
    
  }
    case "SET_WISHLIST": {
      // let cartContent = CartController('delete', payload);
      let wishlist = JSON.parse(localStorage?.getItem("wishlist")) ?? { content: [], amount: 0 }
      return { ...state, wishlist: wishlist };
    
  }
  // case "SET_ORDER_NOTE":{

  //   return {...state, orderNote: payload}
  // }
    case "SAVE_SHIPPINIG_ADDRESS": {
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: {
            ...state.cart.shippingAddress,
            ...action.payload,
          },
        },
      };
    }
    case "SAVE_PAYMENT_METHOD": {
      return {
        ...state,
        cart: {
          ...state.cart,
          paymentMethod: action.payload,
        },
      };
    }
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <storeContext.Provider value={value}>{children}</storeContext.Provider>;
}