import React from "react";
import "./Purchase.css";
import products from "../Components/Products";
import { AiFillEye, AiFillHeart } from "react-icons/ai";

const Purchase = ({ addtocart }) => {
  return (
    <>
    <div className="text-center p-8 text-2xl text-gray-500"> 

      <h1>Purchase handmade products created by young cancer patients, and your purchase will directly support their cancer treatment.</h1>
    </div>
      <div className="flex flex-wrap gap-x-20 justify-center">
        {products.map((curElm) => {
          return (
            <>
              <div className="box" key={curElm.id}>
                <div className="img_box">
                  <img
                    src={curElm.image}
                    alt="hello"
                    className="rounded-md"
                  ></img>
                </div>
                <div className="detail">
                  <h3>{curElm.Name}</h3>
                  <p>Rs {curElm.price}</p>
                  <button onClick={() => addtocart(curElm)}>Add To Cart</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Purchase;
