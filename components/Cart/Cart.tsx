import React, { useState, useRef } from "react";
import Link from "next/link";
import classes from "./Cart.module.scss";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

import { toast } from "react-hot-toast";
import { useStateContext } from "../../context/StateContext";
import { urlFor } from "../../lib/client";
import { isTemplateExpression } from "typescript";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  const clickHandler = (e) => {
    const cart = document.getElementById("cart__container");
    if (e.target.closest("#cart__container") != cart) {
      setShowCart(false);
    }
    e.preventDefault;
  };

  return (
    <div className={classes.cart} ref={cartRef} onClick={clickHandler}>
      <div id="cart__container" className={classes.cart__container}>
        <button type="button" className={classes.cart__heading}>
          <AiOutlineLeft onClick={() => setShowCart(false)} />
          <span className={classes.cart__title}>Your Cart</span>
          <span className={classes.cart__itemsNum}>
            ({totalQuantities} items)
          </span>
        </button>

        {cartItems.length < 1 && (
          <div className={classes.cart__empty}>
            <AiOutlineShopping size={150} color={"#324d67"} />
            <h3 className={classes.cart__emptyText}>Your cart is empty :(</h3>
            <Link href={"/"}>
              <button
                onClick={() => setShowCart(false)}
                type="button"
                className={classes.cart__Button}
              >
                Continue shopping
              </button>
            </Link>
          </div>
        )}

        <div className={`${classes.cart__products} ${classes.productsCart}`}>
          {cartItems.map((item) => (
            <div className={classes.productsCart__item} key={item._id}>
              <img
                src={urlFor(item?.image[0])}
                alt="Item image"
                className={classes.productsCart__image}
              />
              <div className={classes.productsCart__body}>
                <div className={classes.productsCart__heading}>
                  <h5 className={classes.productsCart__title}>{item.name}</h5>
                  <h4 className={classes.productsCart__price}>${item.price}</h4>
                </div>
                <div
                  className={`${classes.productsCart__quantity} ${classes.quantityProductsCart}`}
                >
                  <p className={classes.quantityProductsCart__buttons}>
                    <span
                      className={classes.quantityProductsCart__minus}
                      onClick={() => toggleCartItemQuantity(item._id, "dec")}
                    >
                      <AiOutlineMinus />
                    </span>
                    <span className={classes.quantityProductsCart__num}>
                      {item.quantity}
                    </span>
                    <span
                      className={classes.quantityProductsCart__plus}
                      onClick={() => toggleCartItemQuantity(item._id, "inc")}
                    >
                      <AiOutlinePlus />
                    </span>
                  </p>
                  <button
                    type="button"
                    className={classes.quantityProductsCart__removeItem}
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cartItems.length >= 1 && (
          <div className={`${classes.cart__bottom} ${classes.bottomCart}`}>
            <div className={classes.bottomCart__total}>
              <h3 className={classes.bottomCart__text}>Subtotal:</h3>
              <h3 className={classes.bottomCart__totalPrice}>${totalPrice}</h3>
            </div>
            <button type="button" className={classes.cart__Button} onClick="">
              Buy now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
