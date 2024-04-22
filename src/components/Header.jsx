import React, { useState } from "react";
import "./header.css";
import "../boot.css";
import { logo1 } from "../assets";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  return (
    <section className="App-header">
      <div className="container">
        <div className="row d-flex align-items-center h-100 ">
          <span className="col-lg-4">
            <img src={logo1} alt="Logo" />
          </span>
          <div className="header-list col-lg-8">
            <ul className="d-flex px-2 align-items-center m-0 ">
              <li className="list">Home</li>   
              <li className="list">About</li>
           
              <li className="list">
                Products
                <FaAngleDown className="fa-angle" />
                <ul className="nested__list">
                  <li>Product Details</li>
                  <li>Product List</li>
                </ul>
              </li>
              <li className="list">
                Pages
                <FaAngleDown className="fa-angle" />
                <ul className="nested__list">
                  <li>Product CheckOut</li>
                  <li>Login</li>
                  <li>Shopping card</li>
                  <li>Confirmation</li>
                  <li>Elements</li>
                </ul>
              </li>
              <li className="list">
                Blog
                <FaAngleDown className="fa-angle" />
                <ul className="nested__list">
                  <li>Single Blogsssss</li>
             
                  <li>Blog</li>
                </ul>
              </li>
              <li className="list">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
