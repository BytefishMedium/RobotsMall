import React from "react";
import Robot from "./components/Robot";
import styles from "./App.module.css";
import ShoppingCart from "./components/ShoppingCart";

interface Props {}

export interface Robot{
    type: string;
    price: number;
    description: string;
}

interface State {
  robotsList: Robot[];
  shoppingCartList: Robot[];
}

class App extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
      robotsList: [],
      shoppingCartList: []
    };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/robots`)
      .then((response) => response.json())
      .then((data) => this.setState({
        ...this.state,
        robotsList: data }));
  }

  addRobotToShoppingCardList(robot: Robot){
    // Avoid duplication
    if(this.state.shoppingCartList.filter(r => r.type === robot.type).length === 0) {
      this.setState({
        ...this.state,
        shoppingCartList: [...this.state.shoppingCartList, robot]
      })
    }
  }

  removeRobotFromShoppingCardList(robot: Robot){
    this.setState({
      ...this.state,
      shoppingCartList: this.state.shoppingCartList.filter(r => r.type !== robot.type)
    })
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.title}>
          <h1>We are selling awesome robots!</h1>
        </div>
        <ShoppingCart shoppingCardList={this.state.shoppingCartList} removeRobotFromShoppingCardList={this.removeRobotFromShoppingCardList.bind(this)}/>
        <div className={styles.robotList}>
          {this.state.robotsList.map((r) => (
            <Robot type={r.type} price={r.price} description={r.description} addRobotToShoppingCardList={this.addRobotToShoppingCardList.bind(this)}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
