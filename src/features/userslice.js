import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
   name : "user",
   initialValue : {name: 'Vinayak', age: 22, company: 'Techsperia'},
   reducers:{
      updateName : (value)=>{
          value.name = 'Vinayak Surshetty';
      },
   },
})