import React, { FC, useState } from "react";
import classes from "./product.module.scss";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { Product } from "../../components";
import client, { urlFor } from "../../lib/client";
import { useStateContext } from "../../context/StateContext";

interface ProductDetailProps {
  products: any[];
  product: any;
}

const ProductDetail: FC<ProductDetailProps> = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { incQuantity, decQuantity, quantity, onAdd } = useStateContext();

  return (
    <div className={classes.productDetail}>
      <div className={classes.productDetail__body}>
        <div
          className={`${classes.productDetail__images} ${classes.imagesProductDetail}`}
        >
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
                  i === index
                    ? `${classes.imagesProductDetail__smallImage} ${classes.imagesProductDetail__selectedImage}`
                    : classes.imagesProductDetail__smallImage
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div
          className={`${classes.productDetail__desc} ${classes.descProductDetail}`}
        >
          <h1 className={classes.descProductDetail__name}>{name}</h1>
          <div className={classes.descProductDetail__reviews}>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4 className={classes.descProductDetail__detailsTitle}>Details: </h4>
          <p className={classes.descProductDetail__detailsText}>{details}</p>
          <p className={classes.descProductDetail__price}>${price}</p>

          <div
            className={`${classes.descProductDetail__quantity} ${classes.quantityProductDetail}`}
          >
            <h3>Quantity:</h3>
            <p className={classes.quantityProductDetail__buttons}>
              <span
                className={classes.quantityProductDetail__minus}
                onClick={decQuantity}
              >
                <AiOutlineMinus />
              </span>
              <span className={classes.quantityProductDetail__num} onClick="">
                {quantity}
              </span>
              <span
                className={classes.quantityProductDetail__plus}
                onClick={incQuantity}
              >
                <AiOutlinePlus />
              </span>
            </p>
          </div>

          <div className={classes.descProductDetail__cartButtons}>
            <button
              type="button"
              className={classes.descProductDetail__cartButtonAdd}
              onClick={() => onAdd(product, quantity)}
            >
              Add to Cart
            </button>
            <button
              type="button"
              className={classes.descProductDetail__cartButtonBuy}
              onClick=""
            >
              Buy now
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${classes.productDetail__maylike} ${classes.maylikeProductDetail}`}
      >
        <h1 className={classes.maylikeProductDetail__title}>
          You may also like
        </h1>
        <div className={classes.maylikeProductDetail__marquee}>
          <div
            className={`${classes.maylikeProductDetail__products} ${classes.track}`}
          >
            {products.map((item) => (
              <Product key={item._id} product={item} />
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
