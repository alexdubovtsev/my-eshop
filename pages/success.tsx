import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";

import { useStateContext } from "../context/StateContext";
import { runStars } from '../lib/utils'
import classes from "./success.module.scss";

const success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runStars();
  }, [])

  return (
    <div className={classes.success}>
      <div className={classes.success__body}>
        <p className={classes.success__icon}>
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className={classes.success__emailMsg}>
          Check your email inbox for the receipt.
        </p>
        <p className={classes.success__description}>
          If you have any questions, please email{" "}
          <a className={classes.success__help} href="mailto:help@gmail.com">
            help@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" className={classes.success__button}>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default success;
