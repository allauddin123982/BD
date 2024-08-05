import React from "react";
import './Purchase.css'
import products from '../Components/Products'
import { AiFillEye, AiFillHeart } from "react-icons/ai";

const Purchase = () => {
  return (
    <div>
     
      <div className="flex flex-wrap gap-x-20 justify-center">
        {products.map((curElm) => {
          return (
            <>
              <div className="box">
                <div className="img_box">
                  <img src={curElm.image} alt="hello"></img>
                  <div className="icon">
                    <li>
                      <AiFillHeart />
                    </li>
                    <li onClick={() => detailpage(curElm)}>
                      <AiFillEye />
                    </li>
                  </div>
                </div>
                <div className="detail">
                  <h3>{curElm.Name}</h3>
                  <p>$ {curElm.price}</p>
                  {/* <button onClick={() => addtocart(curElm)}>Add To Cart</button> */}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Purchase;
