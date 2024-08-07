import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
const Cart = ({ cart, setCart }) => {
  // Increase Quantity of cart product
  const incqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exist, qty: exist.qty + 1 }
          : curElm;
      })
    );
  };
  // Decrease Quantity of cart product
  const decqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exist, qty: exist.qty - 1 }
          : curElm;
      })
    );
  };
  // Removing cart product
  const removeproduct = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist.qty > 0) {
      setCart(
        cart.filter((curElm) => {
          return curElm.id !== product.id;
        })
      );
    }
  };
  //Total Price
  const total = cart.reduce((price, item) => price + item.qty * item.price, 0);
  //open model2
  const handleModelTwo = () => {
    const modal = document.getElementById("modal2");
    modal.showModal();
    setSettingDate(!settingDate);
  };
  return (
    <>
      <div className="cart flex flex-col items-center mx-10">
        <span class="text-2xl flex w-full justify-center m-4">
          Sub Total: ${total}
        </span>
        {cart.length === 0 && (
          <>
            <div className="empty_cart flex flex-col items-center gap-4">
              <h2>Your Shopping cart is empty</h2>
              <Link to="/purchase">
                <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600">
                  Shop Now
                </button>
              </Link>
            </div>
          </>
        )}
        <div className="container w-full max-w-sm md:max-w-xl ">
          {cart.map((curElm) => {
            return (
              <>
                <div className=" bg-white border border-gray-200 rounded-lg shadow mt-4 pb-2">
                  <div className="flex justify-end px-4 pt-4 ">
                    {/* New close button */}
                    <button
                      className="cursor-pointer"
                      onClick={() => removeproduct(curElm)}
                    >
                      <AiOutlineClose className="text-gray-500 hover:text-gray-700" />
                    </button>
                  </div>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 p-4">
                    <div className="bg-gray-200 w-52 h-52">
                      <img
                        className="w-full h-full p-2 object-cover shadow-lg"
                        src={curElm.image}
                        alt="Bonnie image"
                      />
                    </div>
                    <div>
                      <h5 className="mb-1 text-xl font-medium text-gray-900">
                        {curElm.Name}
                      </h5>
                      <span className="text-sm text-gray-500">
                        Price: ${curElm.price}
                      </span>
                      <div className="flex mt-4 md:mt-4">
                        <button
                          onClick={() => incqty(curElm)}
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600"
                        >
                          +
                        </button>
                        <a
                          href="#"
                          className="py-2 px-4 ms-2 text-sm font-medium bg-white rounded-lg border border-gray-200 "
                        >
                          {curElm.qty}
                        </a>
                        <button
                          onClick={() => decqty(curElm)}
                          className="inline-flex items-center ms-2 px-4 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600"
                        >
                          -
                        </button>
                      </div>

                      <button
                        className="border mt-4 p-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 w-36"
                        onClick={handleModelTwo}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <dialog id="modal2" className="rounded-lg w-[600px] h-[400px] mt-24">
        <div className="header bg-orange-500 flex justify-between items-center ">
          <p className="px-4 text-white font-bold tracking-wider">Details</p>
          {/* closing button */}
          <span className="p-4 text-white">
            <button onClick={() => document.getElementById("modal2").close()}>
              X
            </button>
          </span>
        </div>

        <div className="Form  ">
          <form className="max-w-sm mx-auto mt-5">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="Name"
                id="floating_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                pattern="123"
                name="phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-ororange-500 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-ororange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="address"
                id="floating_address"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_address"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Address
              </label>
            </div>

            <button
              type="submit"
              className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Cart;
