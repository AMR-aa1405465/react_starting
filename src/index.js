import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App(props) {
  return (
    <div className="App">
      <h1>Hello {props.counter}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

// Exmaple class
class Amr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Hello {this.state.counter}</h1>
        <button
          onClick={() => {
            this.increaseCount();
          }}
        >
          hello world
        </button>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
  increaseCount() {
    //this.setState(prevState => ({ count: prevState.count + 1 }))
    this.setState(prev => ({ counter: prev.counter + 1 }));

    console.log(this.state.count);
  }
}

let count = 0;
const rootElement = document.getElementById("root");
// setInterval(
//   () => ReactDOM.render(<App counter={count++} />, rootElement),
//   1000
// );

//for the class
// setInterval(
//   () => ReactDOM.render(<Amr counter={count++} />, rootElement),
//   1000
// );
//ReactDOM.render(<App />, rootElement);
ReactDOM.render(<Amr counter={count} />, rootElement);
