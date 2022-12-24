import React, { FC, useState, useEffect } from "react";
import classes from "./product.module.scss";
import { BsBagCheckFill } from "react-icons/bs";
import { Product } from "../components";
import client, { urlFor } from "../lib/client";
import { useStateContext } from "../context/StateContext";
import Link from "next/link";
import { runStars } from "../lib/utils";

const success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities, setShowCart } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    setShowCart(false);
    runStars();
  }, []);

  return (
    <div className="success">
      <div className="success__body">
        <p className="success__icon">
          <BsBagCheckFill />
        </p>
        <h2 className="success__thx">Thank you for your order!</h2>
        <p className="success__emailMsg">
          Check your email inbox for the receipt.
        </p>
        <p className="success__description">
          If you have any questions, please email{" "}
          <a className="success__help" href="mailto:help@gmail.com">
            help@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" className="success__button">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default success;
