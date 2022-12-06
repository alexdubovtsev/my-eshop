import React, { FC, useState } from "react";
import Link from "next/link";
import classes from "./FooterBanner.module.scss";
import { urlFor } from "../../lib/client";

interface FooterBannerProps {
  footerBanner: any;
}

const FooterBanner: FC<FooterBannerProps> = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
  },
}) => {
  return (
    <div className={classes.footerBanner}>
      <div className={classes.footerBanner__container}>
        <div
          className={`${classes.footerBanner__body} ${classes.bodyfooterBanner}`}
        >
          <div className={classes.bodyfooterBanner__left}>
            <p className={classes.bodyfooterBanner__discount}>{discount}</p>
            <h3 className={classes.bodyfooterBanner__largeText}>{largeText1}</h3>
            <h3 className={classes.bodyfooterBanner__largeText}>{largeText2}</h3>
            <p className={classes.bodyfooterBanner__saleTime}>{saleTime}</p>
          </div>
          <div className={classes.bodyfooterBanner__right}>
            <p className={classes.bodyfooterBanner__smallText}>{smallText}</p>
            <h3 className={classes.bodyfooterBanner__midText}>{midText}</h3>
            <p className={classes.bodyfooterBanner__desc}>{desc}</p>
            <Link href={`${product}`}>
              <button type="button" className={classes.bodyfooterBanner__button}>{buttonText}</button>
            </Link>
          </div>
          <img
            src={urlFor(image)}
            alt="Footer banner image"
            className={classes.bodyfooterBanner__image}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
