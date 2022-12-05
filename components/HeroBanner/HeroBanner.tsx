import React, { FC, useState } from "react";
import Link from "next/link";
import classes from "./HeroBanner.module.scss"
import {urlFor} from "../../lib/client"

interface HeroBannerProps {
  heroBanner: any;
}

const HeroBanner: FC<HeroBannerProps> = ({ heroBanner }) => {

  return (
    <div className={classes.heroBanner}>
      <div className={classes.heroBanner__container}>
        <div>
          <p className={classes.heroBanner__smallText}>{heroBanner.smallText}</p>
          <h3 className={classes.heroBanner__midText}>{heroBanner.midText}</h3>
          <h1 className={classes.heroBanner__largeText}>{heroBanner.largeText1}</h1>
          <img className={classes.heroBanner__image} src={urlFor(heroBanner.image)} alt="headphones"/>
          <div>
            <Link href={`/product/${heroBanner.product}`}>
              <button className={classes.heroBanner__btn} type="button">{heroBanner.buttonText}</button>
            </Link>
            <div className={`${classes.heroBanner__desc} ${classes.descHeroBanner}`}>
              <h5 className={classes.descHeroBanner__title}>Description</h5>
              <p className={classes.descHeroBanner__text}>{heroBanner.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}

export default HeroBanner;