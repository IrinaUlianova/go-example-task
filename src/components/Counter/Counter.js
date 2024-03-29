// import React from "react";
import Controls from "./Controls";
import Value from "./Value";
import React from "react";
import "./Counter.css";
class Counter extends React.Component {
  static defaultProps = { initialValue: 0 };
  static propTypes = {};
  state = { value: this.props.initialValue };
  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };
  handleDecrement = () => {
    this.setState((prevState) => {
      return { value: prevState.value - 1 };
    });
  };
  render() {
    return (
      <div className="Counter">
        {/* <span className="Counter__value"></span> */}
        {/* <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Уменьшить на 1
          </button>
        </div> */}
        <Value value={this.state.value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;

// class Counter extends Component {
//   static defaultProps = {
//     initialValue: 0,
//   };

//   static propTypes = {
//     //
//   };

//   state = {
//     value: this.props.initialValue,
//   };

//   handleIncrement = () => {
//     this.setState((prevState) => ({
//       value: prevState.value + 1,
//     }));
//   };

//   handleDecrement = () => {
//     this.setState((prevState) => ({
//       value: prevState.value - 1,
//     }));
//   };

//   render() {
//     const { value } = this.state;

//     return (
//       <div className="Counter">
//         <Value value={value} />

//         <Controls
//           onIncrement={this.handleIncrement}
//           onDecrement={this.handleDecrement}
//         />
//       </div>
//     );
//   }
// }

// export default Counter;
