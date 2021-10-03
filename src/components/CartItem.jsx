import { useContext } from "react";
import { CartItems } from "../contextAPI/CartContext";
import { ProductList } from "../contextAPI/Context";

export const CartItem = ({ id, count }) => {
  const [products] = useContext(ProductList);
  const { addToCart, removeFromCart, removeCartItem} = useContext(CartItems);

  const currentProduct = products.find((item) => item.id === id);

  return (
    <div>
      <div className="flex flex-row justify-items-center space-x-3 mx-5 bg-blue-100 rounded-xl my-4 h-52 w-auto">
        <div>
          <img
            src={currentProduct.image}
            alt="product"
            className="rounded-lg mx-4 mt-6 h-24 w-20 border-blue-400"
          />
          <button className=" p-1 text-sm bg-red-500 mx-7 rounded-lg mt-6"
          onClick={() => removeCartItem(currentProduct)}>
            remove
          </button>
        </div>

        <div className="mt-5 flex flex-col">
          <p className="italic mr-5">{currentProduct.title}</p>
          <div className="flex flex-row mt-5">
            <button
              onClick={() => addToCart(currentProduct)}
              className="bg-blue-300  my-10 px-1 rounded-full hover:-translate-y-1 transform transition focus:ring focus:ring-offset-2"
            >
              <i className="fa fa-plus text-3xl text-gray-500 "></i>
            </button>
            <p className=" text-gray-700 text-xl p-7 font-bold">{count}</p>
            <button
              onClick={() => removeFromCart(currentProduct)}
              className="bg-blue-300 my-10 px-1 rounded-full hover:-translate-y-1 transform transition focus:ring focus:ring-offset-2
              "
            >
              <i className="fa fa-minus text-3xl text-gray-500"></i>
            </button>

            <div className=" mb-10 font-medium">
              <p className="mx-6">${currentProduct.price}</p>
            </div>
            <div className=" mb-10 font-medium">
              <p className="mx-6">${currentProduct.price * count}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
