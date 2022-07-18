// import React from 'react-dom';
import React, { useState, useReducer, useRef } from "react";

function PracticeFunction() {
  const inputReference = useRef(null);
  const [state, dispatch] = useReducer(reducer, { count: 0, name: "vinayak" });
  const [myObj, setMyObj] = useState({
    show1: true,
    show2: true,
    show3: true,
  });

  function reducer(state, action) {
    switch (action.type) {
      case "FUN1":
        return { count: state.count + 1, name: state.name + "ravi" };
      case "FUN2":
        return { count: state.count + 1, name: state.name + "surshetty" };
      default:
        return state;
    }
  }
  function handleClick() {
    // if(state.count === 1){
    //     dispatch({type: "FUN2"});
    // }else{
    //     dispatch({type: "FUN1"});
    // }
    var inputText = inputReference.current;
    // console.log("useRef result", inputReference.current);

    setMyObj((prev)=>{
        // console.log("This is the new object", { ...prev, show1: !prev.show1 } );
        return { ...prev, show1: !prev.show1 }
    });
  }



  return (
    <div class="px-3 py-5">
      <h1>Welcome to practice function</h1>
      <h4>Here is the counter value {state.count}</h4>
      <h5>Here is the name {state.name}</h5>
      <input type="text" ref={inputReference} className="text-input myinput" />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Click here
      </button>

      <div>
        {myObj.show1 && <h2>This is show 1</h2>}
        {myObj.show2 && <h2>This is show 2</h2>}
        {myObj.show3 && <h2>This is show 3</h2>}
      </div>
    </div>
  );
}

class Practice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "surshetty",
    };
  }
  handleClick() {
    this.setState({ count: this.state.count + 1, name: this.state.name });
  }
  render() {
    return (
      <div class="">
        This is a class component {this.props.name} and the surname name is{" "}
        {this.state.name}
        <h4>Here is the count {this.state.count}</h4>
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          Click here
        </button>
      </div>
    );
  }
}

export default Practice;
export { PracticeFunction };
