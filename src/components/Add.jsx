import React, { useState } from 'react';
import './Add.css';
import { cap2, pinkcap, yellowPillow } from '../assets';
import { Link } from 'react-router-dom';

const Add = () => {
  const [count , setCount] = useState(0);
  const pricePerItem  = 320;

   const increment = (product) => {
        if (product === 1){
        setCount (count + 1)
      }
   }
   const decrement = (product) => {
    if (product === 1 && count > 0){
      setCount (count - 1)
    }
   }
   const totalPrice = count * pricePerItem;
   

  return (
    <section className="add-section">
      <div className="container">
        <div className="row clearfix">
          <div className="col-lg-6">
            <div className="product">
              <div className="img-dev">
                <img src={yellowPillow} alt="Product" />
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
      </div>
    </section>
  );
}

export default Add