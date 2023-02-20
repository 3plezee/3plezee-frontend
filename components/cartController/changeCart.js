

function ChangeCart(e){
    e.preventDefault();
    // get data from form
      var formData = new FormData(e.target);
      const form_values = Object.fromEntries(formData);

      let product = LatestProducts.find((el)=>el.slug === form_values.slug)
      
      let prod = {
        action: "add",
        name: product.name,
        price: product.price,
        slug: product.slug,
        attributes:{color: "blue", size:"xl"},
        itemQuantity: 3
      }
      CartController(prod)
      

    return(
        <>
        </>
    )
}
export default ChangeCart;