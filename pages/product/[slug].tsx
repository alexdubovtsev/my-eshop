import React, { FC, useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

import client, { urlFor } from "../../lib/client";
import classes from "./product.module.scss";

interface ProductDetailProps {
  products: any[];
  product: any;
}

const ProductDetail: FC<ProductDetailProps> = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);

  return (
    <div className={classes.productDetail}>
      <div className={classes.productDetail__container}>
        <div className={`${classes.productDetail__images} ${classes.imagesProductDetail}`}>

          <div className={classes.imagesProductDetail__mainImageContainer}>
            <img
              src={urlFor(image && image[index])}
              className={classes.imagesProductDetail__mainImage}
            />
          </div>

          <div className={classes.imagesProductDetail__smallImagesContainer}>
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? `${classes.imagesProductDetail__smallImage} ${classes.imagesProductDetail__selectedImage}` : classes.imagesProductDetail__smallImage
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;
  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);
  return {
    props: { products, product },
  };
};

export default ProductDetail;
