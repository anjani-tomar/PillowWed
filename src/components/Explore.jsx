
import React, { useState } from "react";
import "./Explore.css";
import {  pillow2, pillow3, pillow4, pillow5 } from "../assets";
import { Link } from "react-router-dom";

const Explore = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const pricePerItem  = 360;
  const pricePerItem2 = 370;
  const pricePerItem3 = 300;
  const pricePerItem4 = 520;

  const increment = (product) => {
    if (product === 1) {
      setCount(count + 1);
    } else if (product === 2) {
      setCount2(count2 + 1);
    } else if (product === 3) {
      setCount3(count3 + 1);
    } else if (product === 4) {
      setCount4(count4 + 1);
    }
  };

  const decrement = (product) => {
    if (product === 1 && count > 0) {
      setCount(count - 1);
    } else if (product === 2 && count2 > 0) {
      setCount2(count2 - 1);
    } else if (product === 3 && count3 > 0) {
      setCount3(count3 - 1);
    } else if (product === 4 && count4 > 0) {
      setCount4(count4 - 1);
    }
  };

  const totalPrice = count * pricePerItem;
  const totalPrice2 = count2 * pricePerItem2;
  const totalPrice3 = count3 * pricePerItem3;
  const totalPrice4 = count4 * pricePerItem4;

  return (
    <section className="explore-section">
      <div className="container">
        <div className="row clearfix">
          <div className="col-lg-6">
            <p className="product">Product</p>
          </div>
          <div className="col-lg-6">
            <ul className="price">
              <li>Price</li>
              <li>Quality</li>
              <li>Total</li>
            </ul>
          </div>
        </div>
        {/* Product 1 */}
        <div className="row clearfix">
          <div className="col-lg-6">
            <div className="product">
              <div className="img-dev">
                <img src={pillow2} alt="Product" />
              </div>
              <p>minimalistic shop for multipurpose use</p>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="prices">
              <li>${pricePerItem.toFixed(2)}</li>
              <div className="bton">
                <h4>{count}</h4>
                <div className="btn2">
                  <span onClick={() => increment(1)}>+</span>
                  <span onClick={() => decrement(1)}>-</span>
                </div>
              </div>
              <li>${totalPrice.toFixed(2)}</li>
              <Link to="/Add">
                <button className="btn p-3 btn-primary">add</button>
              </Link>
            </ul>
          </div>
        </div>
        {/* Product 2 */}
        <div className="row clearfix">
          <div className="col-lg-6">
            <div className="product">
              <div className="img-dev">
                <img src={pillow3} alt="Product" />
              </div>
              <p>minimalistic shop for multipurpose use</p>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="prices">
              <li>${pricePerItem2.toFixed(2)}</li>
              <div className="bton">
                <h4>{count2}</h4>
                <div className="btn2">
                  <span onClick={() => increment(2)}>+</span>
                  <span onClick={() => decrement(2)}>-</span>
                </div>
              </div>
              <li>${totalPrice2.toFixed(2)}</li>
              <button className="btn p-3 btn-primary">add</button>
            </ul>
          </div>
        </div>
        {/* Product 3 */}
        <div className="row clearfix">
          <div className="col-lg-6">
            <div className="product">
              <div className="img-dev">
                <img src={pillow4} alt="Product" />
              </div>
              <p>minimalistic shop for multipurpose use</p>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="prices">
              <li>${pricePerItem3.toFixed(2)}</li>
              <div className="bton">
                <h4>{count3}</h4>
                <div className="btn2">
                  <span onClick={() => increment(3)}>+</span>
                  <span onClick={() => decrement(3)}>-</span>
                </div>
              </div>
              <li>${totalPrice3.toFixed(2)}</li>
              <Link to="/Add">
                <button className="btn p-3 btn-primary">add</button>
              </Link>
            </ul>
          </div>
        </div>
        {/* Product 4 */}
        <div className="row clearfix">
          <div className="col-lg-6">
            <div className="product">
              <div className="img-dev">
                <img src={pillow5} alt="Product" />
              </div>
              <p>minimalistic shop for multipurpose use</p>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="prices">
              <li>${pricePerItem4.toFixed(2)}</li>
              <div className="bton">
                <h4>{count4}</h4>
                <div className="btn2">
                  <span onClick={() => increment(4)}>+</span>
                  <span onClick={() => decrement(4)}>-</span>
                </div>
              </div>
              <li>${totalPrice4.toFixed(2)}</li>
              <button className="btn p-3 btn-primary">Add</button>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
