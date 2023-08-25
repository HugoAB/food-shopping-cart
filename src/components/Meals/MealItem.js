import React, { useContext } from "react";
import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext)

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.meal.id,
      name: props.meal.name,
      amount: amount,
      price: props.meal.price
    })
  }

  return (
    <li className={classes.item}>
      <div>
        <p className={classes.name}>{props.meal.name}</p>
        <p className={classes.description}>{props.meal.description}</p>
        <p className={classes.price}>${props.meal.price}</p>
      </div>
      <div>
        <MealItemForm id={props.meal.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;