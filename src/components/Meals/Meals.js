import React from "react";
import classes from "./Meals.module.css"
import MealsInfo from "./MealsInfo";
import AvailableMeals from "./AvailableMeals";

const Meals = (props) => {
  return (
    <>
      <MealsInfo />
      <AvailableMeals />
    </>
  );
};

export default Meals;