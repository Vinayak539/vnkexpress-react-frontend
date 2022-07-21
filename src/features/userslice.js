import { createSlice } from '@reduxjs/toolkit'

const initialState = {name: 'Vinayak', age: 22, company: 'Techsperia'};

export const userSlice = createSlice({
   name : "user",
   initialState : {value : initialState},
   reducers:{
      updateName : (state)=>{
          state.value.name = 'Vinayak Surshetty';
      },
      updateCompany : (state)=>{
         state.value = {name: 'Vinayak', age: 22, company: 'Sanjare'};
      }
   },
})

// Action creators are generated for each case reducer function
export const { updateName, updateCompany } = userSlice.actions

export default userSlice.reducer;