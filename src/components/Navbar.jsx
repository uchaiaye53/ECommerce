import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartItems } from "../contextAPI/CartContext";
import Modal from "react-modal"
import { CartItem } from "./CartItem";
import { Scrollbars } from 'react-custom-scrollbars-2';

function Navbar() {
  const [cartProducts] = useContext(CartItems);
  

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const navbarComponent =
    "bg-blue-500 rounded-2xl px-4 py-2 pb-5 font-semibold text-lg text-center hover:bg-blue-300 hover:-translate-y-1 transform transition";

  return (
    <div>
      <nav>
        <div className="mx-20 bg-blue-800 flex justify- justify-between h-20">
          <div className="w-20 h-20 flex mx-7">
            <img
              className="rounded-full"
              src="https://cdn.pixabay.com/photo/2020/06/30/10/23/icon-5355893_960_720.png"
              alt="logo"
            />
            <p className="text-gray-400 italic pt-8 text-2xl">ShopNOW</p>
          </div>

          <div className="flex space-x-5 px-5 py-5">
            <Link to="/" className={navbarComponent}>
              {" "}
              <div> products</div>{" "}
            </Link>
            <Link to="/about" className={navbarComponent}>
              {" "}
              <div> about </div>{" "}
            </Link>
            <Link to="/contact" className={navbarComponent}>
              {" "}
              <div> contact</div>{" "}
            </Link>
          </div>

          <div className="flex flex-row mx-9">
            <button onClick ={() => setModalIsOpen(true)} className="text-center">

              <i className="fa fa-shopping-cart pt-4 text-4xl hover:text-7xl hover:-translate-y-1 transform transition"></i>

            </button>
            <p className="mx-1 pt-4 text-3xl text-gray-300">
              {cartProducts.length}
            </p>
          </div>
        </div>
      </nav>


      <Modal isOpen={modalIsOpen} className="w-4/12 h-screen bg-blue-200 mx-20">
      <header className=" bg-blue-400 flex justify- justify-between h-16">
                <div className="text-gray-500 italic pt-3 text-4xl mx-3">Cart</div>
                <button onClick ={ () =>setModalIsOpen(false)}>
                    <i className="fa fa-close pt-4 text-4xl text-gray-500 mx-7 hover:-translate-y-1 transform transition focus:ring focus:ring-offset-2"></i>
                </button>
            </header>
            <p className="text-center font-semibold text-gray-600 mt-4 mb-5 text-2xl">You have <span className="font-bold text-gray-900">{cartProducts.length}</span> items in shopping cart</p>
            <div>
                <Scrollbars style={{ width: 500, height: 500 }}>

                    {cartProducts.map((cartProduct) => (
                        <CartItem cartProduct={cartProduct} />
                    ))}
                </Scrollbars>
                <div className="text-center font-semibold text-gray-600 mt-5 mb-5">
                    <p>total price = <span>777$</span> </p>
                </div>
            </div>

            <div className="flex flex-row justify-around">
                <Link to="/checkout">
                    <button onClick={() =>{setModalIsOpen(false)}} className="bg-blue-500 text-gray-50 w-32 pt-3 pb-3 rounded-2xl mb-5 hover:-translate-y-1 transform transition focus:ring focus:ring-offset-2">
                        Checkout
                    </button>

                </Link>
                <button className="bg-red-500 text-gray-50 w-32 pt-3 pb-3 rounded-2xl mb-5 hover:-translate-y-1 transform transition focus:ring focus:ring-offset-2">
                    Clear cart
                </button>
            </div>
        
      </Modal>

    </div>
  );
}

export default Navbar;
