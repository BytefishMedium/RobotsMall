import React from "react";
import styles from './Robot.module.css'
import {Robot as RobotInterface} from "../App";

interface RobotProps {
  type: string;
  price: number;
  description: string;
  addRobotToShoppingCardList: (RobotInterface) => void
}

const Robot: React.FC<RobotProps> = ({ type, price, description, addRobotToShoppingCardList }) => {

  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${type}`} />
      <h2>{type}</h2>
      <p>Price: <span className={styles.price}>{price}</span>$</p>
      <p className={styles.description}>{description}</p>
      <button className={styles.addBtn} onClick={(e) => addRobotToShoppingCardList({type, price, addRobotToShoppingCardList})}>add to shopping cart</button>
    </div>
  );
};

export default Robot;
