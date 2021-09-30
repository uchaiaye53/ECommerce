import React from "react";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Link } from "react-router-dom";

function CartPage() {

    return (
        <div className="mx-20 w-4/12 bg-gray-100 max-h-full">
            <header className=" bg-blue-300 flex justify- justify-between h-16">
                <div className="text-gray-500 italic pt-3 text-4xl mx-3">Cart</div>
                <div>
                    <i className="fa fa-close pt-4 text-4xl text-gray-500 mx-7"></i>
                </div>
            </header>
            <div>
                <p className="text-center font-semibold text-gray-600 mt-4 mb-5">You have <span className="font-bold text-gray-900">5</span> items in shopping cart</p>

                <Scrollbars style={{ width: 500, height: 400 }}>


                    <div className="flex flex-row justify-items-center space-x-3 mx-5 bg-blue-100 rounded-xl mb-10">
                        <div>
                            <button><i className="fa fa-close pt-4 text-4xl text-red-500 mx-7"></i></button>
                            <img src="https://global-uploads.webflow.com/5d556af3fe21d65f602dca94/5dec1f7bef1c10fde3b062e9_2Go6LD256JMQ.png" alt="product" />
                        </div>
                        <div className="flex flex-row justify-around bg-blue-300 rounded-xl mt-20 mb-20 px-4 space-x-3 justify-items-center">
                            <button> <i className="fa fa-plus pt-4 text-4xl text-gray-500"></i></button>
                            <p className="mt-5 text-gray-700 text-xl">6</p>
                            <button> <i className="fa fa-minus pt-4 text-4xl text-gray-500"></i></button>
                        </div>
                        <div className="mt-20 mb-20"> <p className="mx-6">price</p> </div>
                        <div className="mt-20 mb-20"> <p className="mx-6">totalprice</p> </div>
                    </div>

                </Scrollbars>

                <div className="text-center font-semibold text-gray-600 mt-5 mb-5">
                    <p>total price = <span>777$</span> </p>
                </div>

            </div>
            <div className="flex flex-row justify-around">
            <Link to="/checkout"> 
                <button className="bg-blue-500 text-gray-50 w-32 pt-3 pb-3 rounded-2xl">
                    Checkout
                </button>

                </Link>
                <button className="bg-red-500 text-gray-50 w-32 pt-3 pb-3 rounded-2xl">
                    Clear cart
                </button>
            </div>
            <h2>shesh</h2>
        </div>
    );
}

export default CartPage;