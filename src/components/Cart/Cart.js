import React, { useContext } from "react";
import classes from "./Cart.module.css"
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
	const cartCtx = useContext(CartContext)

	const totalAmount = cartCtx.totalAmount.toFixed(2)
	const hasItems = cartCtx.items.length > 0

	const addItemHandler = (item) => {
		cartCtx.addItem({
			...item, amount: 1
		})
	}

	const removeItemHandler = (id) => {
		cartCtx.removeItem(id)
	}

	return (
		<Modal onClose={props.onHideCart}>
			<div className={classes.cart}>
				<div className={classes.header}>
					<h3>Your Cart</h3>
				</div>
				<div className={classes.items}>
					<div>
						{cartCtx.items.map(item => (
							<CartItem
								key={item.id}
								name={item.name}
								price={item.price}
								amount={item.amount}
								onAddItem={addItemHandler.bind(null, item)}
								onRemoveItem={removeItemHandler.bind(null, item.id)}
							/>
						))}
					</div>
					<div className={classes["total-amount"]}>
						<p>Total Amount</p>
						<p>${totalAmount}</p>
					</div>
					<div className={classes.actions}>
						<button className={classes.close} onClick={() => props.onHideCart()}>Close</button>
						{hasItems && <button className={classes.order}>Order</button>}
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default Cart;