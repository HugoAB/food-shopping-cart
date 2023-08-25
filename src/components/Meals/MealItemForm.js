import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = (props) => {
	const [amountIsValid, setAmountIsValid] = useState(true)

	const amountInputRef = useRef()

	const formSubmitHandler = (e) => {
		e.preventDefault();
		const amountEntered = amountInputRef.current.value
		const amountEnteredNumber = +amountEntered
		
		if(amountEntered.lenght === 0 || amountEnteredNumber < 1 || amountEnteredNumber > 5) {
			setAmountIsValid(false)
			return
		}
		props.onAddToCart(amountEnteredNumber)
	}

  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <Input
				label="Amount"
				id={"amount_" + props.id}
				type="number"
				min="1"
				max="5"
				step="1"
				defaultValue="1"
				ref={amountInputRef}
			/>
			<button>+ Add</button>
			{!amountIsValid && <p style={{fontSize: "12px"}}>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;