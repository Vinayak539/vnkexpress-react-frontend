import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
   name : "user",
   initialValue : {value : {name: 'Vinayak', age: 22, company: 'Techsperia'}},
   reducers:{
      updateName : (value)=>{
          value.name = 'Vinayak Surshetty';
      },
      updateCompany : (value)=>{
         return {name: 'Vinayak', age: 22, company: 'Sanjare'}
      }
   },
})

// Action creators are generated for each case reducer function
export const { updateName, updateCompany } = userSlice.actions

export default userSlice.reducer;