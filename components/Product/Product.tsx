import React, { FC, useState } from "react";
import Link from 'next/link';

import classes from "./Product.module.scss";
import { urlFor } from "../../lib/client";

interface ProductProps {
  product: any,
}

const Product: FC<ProductProps> = ({ product: {image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className={classes.cardProduct}>
          <img src={urlFor(image && image[0])} alt="" className={classes.cardProduct__image}/>
          <p className={classes.cardProduct__name}>{name}</p>
          <p className={classes.cardProduct__price}>${price}</p>
        </div>
      </Link>
    </div>
  )}

export default Product;