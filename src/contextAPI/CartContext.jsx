import { createContext, useState } from "react";

const CartItems = createContext();

const CartContext = ({ children }) => {
  const [cartProducts, setCardProducts] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

  const addToCart = (product) => {
    setCardProducts([...cartProducts, product]);
    localStorage.setItem("cart", JSON.stringify([...cartProducts, product]));
  };

  const removeFromCart = (product) => {
    let tempProducts = [...cartProducts];
    const pos = tempProducts.findIndex((item) => item.id === product.id);
    tempProducts.splice(pos, 1);
    setCardProducts(tempProducts);
    localStorage.setItem("cart", JSON.stringify(tempProducts));
  };

  const clearCart = () => {
    setCardProducts([]);
    localStorage.removeItem("cart");
  };

  const removeCartItem = (product) => {
    const tempCartProducts = cartProducts.filter((item) => item.id !== product.id)
    setCardProducts(tempCartProducts)
    localStorage.setItem("cart",JSON.stringify(tempCartProducts))
  }

  return (
    <>
      <CartItems.Provider
        value={{cartProducts, addToCart, removeFromCart, clearCart, removeCartItem}}
      >
        {children}
      </CartItems.Provider>
    </>
  );
};

export default CartContext;

export { CartItems };
