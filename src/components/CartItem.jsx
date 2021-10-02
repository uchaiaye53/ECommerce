import { useContext, useEffect, useState } from "react";
import { CartItems } from "../contextAPI/CartContext";

export const CartItem = ({ cartProduct }) => {

    const [cartProducts, addToCart, removeFromCart] = useContext(CartItems);

    const [count, setCount] = useState(
        cartProducts.filter((item) => item.id === cartProduct.id).length
    );

    useEffect(
        () =>
            setCount(cartProducts.filter((item) => item.id === cartProduct.id).length),
        [cartProducts, cartProduct.id]
    );


    return (
        <div>
            <div className="flex flex-row justify-items-center space-x-3 mx-5 bg-blue-100 rounded-xl my-4 h-52 w-auto">
                <div>
                    <img src={cartProduct.image} alt="product" className="rounded-lg mx-4 mt-6 h-24 w-20 border-blue-400" />
                    <button className=" p-1 text-sm bg-red-500 mx-7 rounded-lg mt-6"> remove </button>
                </div>

                <div className="mt-5 flex flex-col">
                    <p className="italic mr-5">{cartProduct.title}</p>
                    <div className="flex flex-row mt-5">


                        <button onClick={() => addToCart(cartProduct)} className="bg-blue-300  my-10 px-1 rounded-full"> <i className="fa fa-plus text-3xl text-gray-500"></i></button>
                        <p className=" text-gray-700 text-xl p-7 font-bold">{count}</p>
                        <button onClick={() => removeFromCart(cartProduct)} className="bg-blue-300 my-10 px-1 rounded-full"> <i className="fa fa-minus text-3xl text-gray-500"></i></button>


                        <div className=" mb-10 font-medium"> <p className="mx-6">${cartProduct.price}</p> </div>
                        <div className=" mb-10 font-medium" > <p className="mx-6">${cartProduct.price * count}</p> </div>
                    </div>
                </div>
            </div>
        </div>
    );
}