import {isEqual} from "lodash";

const CartController = (
  action, param
) => {
  //get the current value of cart from localstorage
  const localCart = localStorage.getItem("cart");
  
  
  // check if a product with the same attributes and slug exist in cart. Return it's index or return -1 if not found
  
  if (localCart) {
      //parse the current value of cart
        const cartContent = JSON.parse(localCart);
        const index = cartContent["content"].findIndex(
            (item) => isEqual(item.slug, param.slug) && isEqual(item.attributes, param.attributes)
          );
         if (index === -1) {
           cartContent.content.push(param)
           cartContent.amount += 1
           localStorage.setItem('cart', JSON.stringify(cartContent)) 
         }
         else{
           if (action === 'add') {
            
             cartContent.content[index].quantity += param.quantity
             cartContent.amount += param.quantity
             localStorage.setItem('cart', JSON.stringify(cartContent)) 
             
           }
           else if (action === 'delete') {
            cartContent.amount -= cartContent.content[index].quantity
              cartContent.content.splice(index, 1)
              localStorage.setItem('cart', JSON.stringify(cartContent))
            
           }
           else if(action === 'remove'){
            cartContent.content[index].quantity -= 1
             cartContent.amount -= 1
             
             if (cartContent.content[index].quantity <= 0) {
               cartContent.content.splice(index, 1)
             }
             localStorage.setItem('cart', JSON.stringify(cartContent))

           }
         }
         return cartContent
  }
  else{
    let cart ={content: [param], amount: 1}
      localStorage.setItem('cart', JSON.stringify(cart))
      return cart
  }
  
 
};
export default CartController;
