import Link from "next/link";
import React, { useState } from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineFacebook,
} from "react-icons/ai";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer__container}>
        <p className={classes.footer__copy}>2022 All rights reserverd</p>
        <div className={classes.footer__icons}>
          <Link href="#">
            <AiFillInstagram />
          </Link>
          <Link href="#">
            <AiOutlineTwitter />
          </Link>
          <Link href="#">
            <AiOutlineFacebook />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
