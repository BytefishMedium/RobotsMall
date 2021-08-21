import React from "react";
import styles from "./ShoppingCart.module.css";
import { FiShoppingCart } from "react-icons/fi";
import {Robot} from "../App";

interface Props {
  shoppingCardList: Robot[],
  removeRobotFromShoppingCardList: (Robot) => void
}

interface State {
  isOpen: boolean;
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.setState({isOpen: !this.state.isOpen})
  }

  getTotalPrice(){
    let total = 0
    this.props.shoppingCardList.forEach(robot => {
      total+= robot.price
    })
    return total
  }

  handleRemove(robot: Robot){
    this.props.removeRobotFromShoppingCardList(robot)
  }

  render() {
    return (
      <div className={styles.cartContainer}>
        <FiShoppingCart />
        <span style={{color: "red"}}> {this.props.shoppingCardList.length} </span> robots in you shopping cart,
        total price: <span style={{color: "red"}}>{this.getTotalPrice()}$</span>.
        <button className={styles.detailsBtn} onClick={this.handleClick}>
          {this.state.isOpen ? 'hide details' : 'show details'} </button>
        <div
          className={styles.cartDropDown}
          style={{
            display: this.state.isOpen ? "block" : "none",
          }}
        >
          <ul>
            {
              this.props.shoppingCardList.length === 0 ?
                <li>nothing in your shopping cart</li> :
                ''
            }
            {
              this.props.shoppingCardList.map(robot => {
                return <li>{robot.type} <button onClick={event => this.handleRemove(robot)}>remove</button></li>
                }
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
