import {useSelector} from 'react-redux';

export default function useReduxValues(){
   const info = useSelector((state)=>{
      return state.info.value;
   })

   return <div class="px-3 py-5">
      <h1>Hey !! here we are using the redux values</h1>
      <p className="mb-0">ID - {info.id} </p>
        <p className="mb-0">DESIGNATION - {info.designation} </p>
        <p className="mb-0">EXPERIENCE - {info.experience}</p>
   </div>
}