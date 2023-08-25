import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartBadge.module.css"
import CartIcon from "../UI/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartBadge = (props) => {
  const [btnIsHighligthted, setBtnIsHighligthted] = useState(false)
  const cartCtx = useContext(CartContext)

  const numOfCartItems = cartCtx.items.reduce((curr, item) => curr + item.amount, 0)
  const btnClasses = `${classes.button} ${btnIsHighligthted ? classes.bump : ""}`

  useEffect(() => { 
    if(cartCtx.items.length === 0) {
      return
    }
    setBtnIsHighligthted(true)

    const timer = setTimeout(() => {
      setBtnIsHighligthted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }

  }, [cartCtx.items])

  return (
    <div className={btnClasses} onClick={props.onShowCart}>
      <CartIcon />
      <span>Your Cart</span>
      <span className={classes["num-badge"]}>{numOfCartItems}</span>
    </div>
  );
};

export default HeaderCartBadge;