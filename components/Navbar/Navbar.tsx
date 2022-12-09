import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "../Cart/Cart";
import classes from "./Navbar.module.scss";
import { useStateContext } from "../../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__container}>
        <p className={classes.navbar__logo}>
          <Link href="/">Music store</Link>
        </p>
        <button type="button" className={classes.navbar__cartIcon} onClick={() => setShowCart(true)}>
          <AiOutlineShopping />
          <span className={classes.navbar__itemQty}>{totalQuantities}</span>
        </button>
        {showCart && <Cart/>}
      </div>
    </div>
  );
};

export default Navbar;
