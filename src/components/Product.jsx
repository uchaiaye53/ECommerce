import React, { useContext, useState } from "react";
import { ProductList } from "../contextAPI/Context";
import { Scrollbars } from 'react-custom-scrollbars-2';

function Product() {
  const [products, setProducts] = useContext(ProductList);
  const [cart, setCart] = useState([])
  const [count, setCount] = useState(1)

  const add = (product) => {
    setCart([...cart, product])
  };

  const incrementCount = (productId)=>{
    setCount(count+1)
  }

  const decrementCount = (productId) =>{
   if(count>1){
     setCount(count-1)
   }else{
     setCount(0);
   }
  }

  function isProductInCart(id) {
    let x = false;
    cart.forEach(product => {
      if (product.id === id)
        x = true
    })
    return x
    
  }

  return (

    <>

      <Scrollbars style={{ width: 1535, height: 670 }}>

        <div className="mx-20 bg-blue-100">
          <div className="grid grid-cols-4 gap-10 justify-items-center">
            {products.map((product) => {
              return (
                <div>
                  <div className="py-10 mx-5">
                    <div className="rounded overflow-hidden shadow-lg max-w-xs p-2 bg-gray-100 space-y-5">
                      <img
                        src={product.image}
                        alt="1st pic"
                        className="w-full h-80"
                      />
                      <p className="h-16">{product.title}</p>
                      <p>${product.price}</p>
                      {
                        isProductInCart(product.id) ? (
                          <div className="flex flex-row justify-around bg-blue-300 rounded-xl">
                            <button onClick={()=> incrementCount(product.id)}> <i className="fa fa-plus pt-4 text-4xl text-gray-500 mx-7"></i></button>
                            <p className="mt-5 text-gray-700 text-xl">{count}</p>
                            <button onClick={()=> decrementCount(product.id)}> <i className="fa fa-minus pt-4 text-4xl text-gray-500 mx-7"></i></button>
                          </div>

                        ) :
                          (<button onClick={() => add(product)} className="bg-blue-600 text-gray-50 w-full pt-3 pb-3 rounded-2xl">
                            Add to cart
                          </button>)
                      }
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Scrollbars>
    </>

  );
}

export default Product;
