import { createSlice } from '@reduxjs/toolkit';

const initialValues = {id:'', designation:'', experience: ''};
const infoSlice = createSlice({
   name : "info",
   initialState : {value : initialValues},
   reducers : {
      updateInfo : (state, action)=>{
         state.value = action.payload; 
         // designation=action.payload.designation; 
         // experience= action.payload.experience;  
      }
   }
});

export {infoSlice};
export const {updateInfo} = infoSlice.actions;
export default infoSlice.reducer;