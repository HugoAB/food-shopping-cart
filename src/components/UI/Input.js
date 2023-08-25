import React from "react";
import classes from "./Input.module.css"

const Input = React.forwardRef((props, ref) => {
	return (
		<div className={classes.input}>
			<label htmlFor={props.id}>{props.label}</label>
			<input
				type={props.type}
				id={props.id}
				placeholder={props.placeholder}
				min={props.min}
				max={props.max}
				step={props.step}
				defaultValue={props.defaultValue}
				ref={ref}
			/>
		</div>
	);
});

Input.defaultProps = {
	type: "text"
}

export default Input;