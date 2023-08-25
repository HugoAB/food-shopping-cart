import React from "react";
import classes from "./CartItem.module.css"

const CartItem = (props) => {
	return (
		<div className={classes.item}>
			<div>
				<p className={classes.name}>{props.name}</p>
				<div className={classes.details}>
					<p className={classes.price}>${props.price}</p>
					<p className={classes.amount}>x {props.amount}</p>
				</div>
			</div>
			<div className={classes.actions}>
				<button onClick={props.onRemoveItem}>−</button>
        <button onClick={props.onAddItem}>+</button>
			</div>
		</div>
	);
};

export default CartItem;