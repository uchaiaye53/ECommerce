import React from "react";
import{Link} from 'react-router-dom'

function Navbar() {
  const navbarComponent =
    "bg-blue-400 rounded-2xl px-4 py-2 pb-5 font-semibold text-lg text-center hover:bg-gray-700 hover:text-gray-50";

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
            <Link to="/" className={navbarComponent}> <div> products</div> </Link>
            <Link to="/about" className={navbarComponent}> <div> about </div> </Link>
            <Link to="/contact" className={navbarComponent}> <div> contact</div> </Link>
          </div>

          <div className="flex flex-row mx-9">
            <button className="text-center">
              <Link to="/cart"> <i className="fa fa-shopping-cart pt-4 text-4xl"></i></Link>
            </button>
            <p className="mx-1 pt-4 text-3xl text-gray-300">0</p>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
