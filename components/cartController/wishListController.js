import {isEqual} from "lodash";

const WishListController = (
  param
) => {
  //get the current value of cart from localstorage
  const localCart = localStorage.getItem("wishlist");
  
 
  // check if a product with the same attributes and slug exist in cart. Return it's index or return -1 if not found
  
  if (localCart) {
      //parse the current value of cart
        const cartContent = JSON.parse(localCart);
        
        const index = cartContent.content.findIndex(
            (item) => isEqual(item.slug, param.slug) && isEqual(item.name, param.name)
          );
         if (index === -1) {
           cartContent.content.push(param)
           cartContent.amount += 1
           localStorage.setItem('wishlist', JSON.stringify(cartContent)) 
         }
         else{
           
           
           
            
             cartContent.amount -= 1
             cartContent.content.splice(index, 1)
             
             
             localStorage.setItem('wishlist', JSON.stringify(cartContent))

           
         }
         return cartContent
  }
  else{
    let wishlist ={content: [param], amount: 1}
      localStorage.setItem('wishlist', JSON.stringify(wishlist))
      return wishlist
  }
  
 
};
export default WishListController;
