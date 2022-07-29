import React, {useState, useCallback} from 'react';

export default React.memo(function Prac1(){
   const [state, setState] = useState('');
   const [count, setCount] = useState(0);
   
   console.log("Hello this is the PRAC1 component");
   var handleInputChange = useCallback((e)=>{
      setState(e.target.value);
      setTimeout(()=>{
         console.log("Hello this is handleInput function", e.target.value);
      }, 2000)
      }, []);

   return <div className="my-3">
      <h2>Hello this is the PRAC1 component</h2>
      <input type="text" value={state} onChange={(evt)=>{handleInputChange(evt)}}/>
      <button onClick={()=>{setCount(count+1)}}>{count}</button>
   </div>
})