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

  return (
    <>
      <CartItems.Provider value={[cartProducts, addToCart, removeFromCart]}>
        {children}
      </CartItems.Provider>
    </>
  );
};

export default CartContext;

export { CartItems };
