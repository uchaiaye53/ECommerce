
import { Link } from "react-router-dom";

function Checkout() {
    return (
        <div className="mx-20 bg-blue-200">
            <div className="w-3/6 mx-auto p-8">
                <div className="mb-8 italic text-2xl text-gray-700 text-center font-bold">Contact Information</div>
                <form className="flex flex-col space-y-5">
                    <input className="p-2 rounded-xl" type="text" name="firstName" placeholder="First Name" />
                    <input className="p-2  rounded-xl" type="text" name="lastName" placeholder="Last Name" />
                    <input className="p-2  rounded-xl" type="number" name="phone" placeholder="Phone" />
                    <input className="p-2  rounded-xl" type="email" name="email" placeholder="Email" />
                    <textarea className="p-2  rounded-xl" name="Address" placeholder="Address" />
                    <div className="flex py-3 px-6 bg-gray-50 rounded-xl">
                        <h4 className="font-semibold italic">Total Items: </h4>
                        <h6 className="flex-grow text-right">2</h6>
                    </div>
                    <div className="flex py-3 px-6 bg-gray-50 rounded-xl">
                        <h4 className="font-semibold italic ">Total Cost: </h4>
                        <h6 className="flex-grow text-right">300$</h6>
                    </div>
                    <div className="flex justify-between mx-4">
                    <Link to="/success"> 
                    <button className="bg-blue-500 px-10 py-3 rounded-xl" type="submit" >Confirm Order</button>

                </Link>
                        
                        <button className="bg-red-500 px-16 py-3 rounded-xl">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Checkout;