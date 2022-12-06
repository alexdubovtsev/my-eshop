import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__container}>
        <p className={classes.navbar__logo}>
          <Link href="/">Music store</Link>
        </p>
        <button type="button" className={classes.navbar__cartIcon} onClick="">
          <AiOutlineShopping />
          <span className={classes.navbar__itemQty}>1</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
