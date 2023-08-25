import React from "react";
import classes from "./Header.module.css"
import HeaderCartBadge from "./HeaderCartBadge"
import mealImg from "../../assets/fish.jpg"

const Header = (props) => {
  return (
    <header>
      <div className={classes.header}>
        <nav className={classes.navbar}>
          <h1>MyDeliciousMeals</h1>
          <HeaderCartBadge onShowCart={props.onShowCart} />
        </nav>
      </div>
      <div className={classes["main-image"]}>
        <img src={mealImg} />
      </div>
    </header>
  );
};

export default Header;