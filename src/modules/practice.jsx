// import React from 'react-dom';
import React, {
  useState,
  useReducer,
  useRef,
  useEffect,
  useLayoutEffect,
  useCallback,
  useMemo,
  useContext
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateName } from "../features/userslice";
import { updateInfo } from "../features/infoSlice";
import { Link } from "react-router-dom";
import $ from "jquery";

import Prac1 from "../components/prac1";
import Prac2 from "../components/prac2";

import {MyContext} from '../App';
import axios from "axios";

export function PracticeFunction(props) {
  const [state, setState] = useState(0);
  const [pstate, setPstate] = useState("Initial Value");

  useEffect(()=>{
    axios.get("https://gorest.co.in/public/v2/users")
    .then((response) => {
      console.log(response.data); 
      dispatch({type: "updateNames", payload:response.data});
    });
    // axios.get("https://gorest.co.in/public/v2/posts")
    // .then((response) => {
    //   console.log(response.data); 
    //   dispatch({type: "updatePropertyPosts", payload:response.data});
    // });
  }, []);

  const reducer = (state, action)=>{
    // console.log("Here are the actions", state, action)
    switch (action.type) {
      case "update":
        return (state.name1 = "Vinayak");
        case "updateNames":
          var names = action.payload.map((item)=>item.name);
          return {...state, names : names};
        case "updatePropertyPosts":
          var posts = action.payload.map((item)=>{
            return {'title': item.title, 'body': item.body}
          })
          console.log("here are the posts", {...state, properties:{...state.properties, posts : posts}});
          return {...state, properties:{...state.properties, posts : posts}};
          // (state.properties.posts = action.payload.map((item)=>item.name));
        default:
          return state;
    }
  }

  const [myreducer, dispatch] = useReducer(reducer, {names:[], properties:{name:'posts', posts: []}});
  // console.log("Logging the myreducer", myreducer.properties.name);

  // var myOwnContext = useContext(MyContext);
  // console.log("This is the context", myOwnContext.theme);
 

  const expensiveFunction = useCallback(()=>{
    console.log("Expensive function invoked");
    var a = new Promise((resolve)=>{
      setTimeout(()=>{
        resolve("This is the expensive function");
      }, 6000);
    })
    a.then((res)=>{
      console.log("Done executing the expensive func");
    })

    // console.log("This is the result of promise", a.then((res)=>{
    //   // return res;
    //   setPstate(res);
    // }));

    // setPstate()
  }
, []);
  useMemo(()=>{
    expensiveFunction();
  }, [pstate]);

  const resolveReducer = useCallback(()=>{
    console.log("calling dispatch");
    dispatch({type: "update"});
  }, []);

  return (
    <div className="px-3 py-3">
      <div className="px-3 py-3">
         <h2>Hey this is the main practice module!!</h2>
          <button onClick={() => { setState(state + 1); }}> Count {state} </button>
          <button onClick={() => { setPstate(pstate + 1); }}> Pstate {pstate} </button>
          <h3>Here is a function {pstate}</h3>
          <Prac1 />
          <Prac2 />
      </div>
      <hr/>
      <div className="px-3 py-3">
        <h2>Hey here we are using useReducer</h2>
        <p>Here are the names : <br/> {(myreducer.names.length>0 && myreducer.names!=null) && myreducer.names.join(",\t")}</p>
        {
        myreducer.properties.posts.length && 
        <div>
          {
          myreducer.properties.posts.map((item)=>{
            <div>
              <p className="m-0">title : {item.title}</p>
              <p className="m-0">body : {item.body}</p>
            </div>
          })
          }
        </div>
        }

        {/* <p>We have Properties with name {myreducer.properties.name}</p> */}
        {/* <p>We have Properties with name {myreducer.properties.name}</p> */}
        {/* <button onClick={()=>{resolveReducer()}}>Update records</button> */}
      </div>
    </div>
  );
}

// function PracticeFunction(props) {
//   const inputReference = useRef(null);
//   const user = useSelector((state) => {
//     return state.user.value;
//   });
//   const info = useSelector((state) => {
//     return state.info.value;
//   });
//   const userDispatch = useDispatch();

//   useEffect(()=>{
//     var a = $('.heading');
//     console.log("This is useEffect", a.attr('class'));
//   }, []);

//   useLayoutEffect(()=>{
//     console.log("This is useLayoutEffect");
//   }, []);

//   const [errors, updateErrors] = useState({ inputErr: false });
//   const [userInfoValues, updateInfos] = useState({
//     id: "",
//     designation: "",
//     experience: "",
//   });

//   const [state, dispatch] = useReducer(reducer, { count: 0, name: "vinayak" });
//   const [myObj, setMyObj] = useState({
//     show1: true,
//     show2: true,
//     show3: true,
//   });

//   function reducer(state, action) {
//     switch (action.type) {
//       case "FUN1":
//         return (state.count = state.count + 1);
//       case "FUN2":
//         return { count: state.count + 1, name: state.name + "surshetty" };
//       default:
//         return state;
//     }
//   }
//   function handleClick() {
//     // if(state.count === 1){
//     //     dispatch({type: "FUN2"});
//     // }else{
//     //     dispatch({type: "FUN1"});
//     // }
//     var inputText = inputReference.current;
//     // console.log("useRef result", inputReference.current);

//     setMyObj((prev) => {
//       // console.log("This is the new object", { ...prev, show1: !prev.show1 } );
//       return { ...prev, show1: !prev.show1 };
//     });
//   }

//   function handleInput(event, inputType) {
//     if (inputType == "id") {
//       updateInfos({ ...userInfoValues, id: event.target.value });
//     } else if (inputType == "designation") {
//       updateInfos({ ...userInfoValues, designation: event.target.value });
//     } else if (inputType == "experience") {
//       updateInfos({ ...userInfoValues, experience: event.target.value });
//     }
//   }

//   const updateReduxValues = () => {
//     if(userInfoValues.id!='' && userInfoValues.designation!='' && userInfoValues.experience!='') {
//       userDispatch(updateInfo(userInfoValues));
//     } else {
//       updateErrors({ ...errors, inputErr: true });
//     }
//   };

//   return (
//     <div class="px-3 py-5">
//       <div className="my-3">
//         <h1 className="heading">Hey !! here is the redux section</h1>
//         <h5>Here are the details:</h5>
//         <p className="mb-0">Name - {user.name} </p>
//         <p className="mb-0">Age - {user.age} </p>
//         <p className="mb-0">Company - {user.company}</p>
//         <h5>Here are the details:</h5>
//         <p className="mb-0">ID - {info.id} </p>
//         <p className="mb-0">DESIGNATION - {info.designation} </p>
//         <p className="mb-0">EXPERIENCE - {info.experience}</p>
//         <br/>
//         <input
//           type="text"
//           value={userInfoValues.id}
//           placeholder="Enter ID"
//           onChange={($event) => {
//             handleInput($event, "id");
//           }}
//         />
//         <input
//           type="text"
//           value={userInfoValues.designation}
//           placeholder="Enter designation"
//           onChange={($event) => {
//             handleInput($event, "designation");
//           }}
//         />
//         <input
//           type="text"
//           value={userInfoValues.experience}
//           placeholder="Enter experience"
//           onChange={($event) => {
//             handleInput($event, "experience");
//           }}
//         />
//         {errors.inputErr && <p style={{ color: "red" }}>Please enter all values</p>}
//         <button
//           className="mt-3"
//           onClick={() => {
//             updateReduxValues();
//           }}
//         >
//           Change states
//         </button>
//          <br/>
//         <Link to="/practice2">Go to practice 2</Link>
//       </div>

//       <hr />

//       <h1>Welcome to practice function</h1>
//       <h3>my name is {props.name}</h3>
//       <h4>Here is the counter value {state.count}</h4>
//       <h5>Here is the name {state.name}</h5>
//       <input type="text" ref={inputReference} className="text-input myinput" />
//       <button
//         onClick={() => {
//           handleClick();
//         }}
//       >
//         Click here
//       </button>

//       <div>
//         {myObj.show1 && <h2>This is show 1</h2>}
//         {myObj.show2 && <h2>This is show 2</h2>}
//         {myObj.show3 && <h2>This is show 3</h2>}
//       </div>
//     </div>
//   );
// }

// class Practice extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//       name: "surshetty",
//     };
//   }
//   static getDerivedStateFromProps(props, state){
//     console.log("Here are the deried values", props.name, state.count);
//   }
//   componentDidMount(){
//     console.log("Component Mounted");
//   }
//   shouldComponentUpdate(){
//     return true;
//   }

//   componentDidUpdate(){
//     alert("Component is updated");
//   }

//   componentWillUnmount(){
//     console.log("component is unmounting");
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState){
//     console.log("prev value is", prevState.count);
//   }

//   handleClick() {
//     this.setState({ ...this.state, count: this.state.count + 1 });
//   }
//   render() {
//     return (
//       <div class="">
//         This is a class component {this.props.name} and the surname name is{" "}
//         {this.state.name}
//         <h4>Here is the count {this.state.count}</h4>
//         <button
//           onClick={() => {
//             this.handleClick();
//           }}
//         >
//           Click here
//         </button>
//       </div>
//     );
//   }
// }

// export default Practice;
// export { PracticeFunction };
