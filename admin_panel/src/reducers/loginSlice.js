import { createSlice } from '@reduxjs/toolkit'
import { json } from 'react-router-dom';
import { getCookie, removeCookie, setCookie } from 'react-use-cookie';
const initialState = {
    adminEmail: getCookie("adminEmail"),
    adminId: getCookie("adminId")
  }

  export const loginSlice = createSlice({
    name:"admin",
    initialState,
    reducers:{
      storeadminData:( oldState,reqData )=>{
        oldState.adminEmail=reqData.payload.adminEmail;
        oldState.adminId=reqData.payload._id;
        setCookie("adminEmail",reqData.payload.adminEmail )
        setCookie("adminId",reqData.payload._id )
      },
      logOut:(oldState)=>{
        oldState.adminEmail='';
        oldState.adminId='';
        removeCookie("adminEmail")
        removeCookie("adminId")
      }
    }
  })

  export const { storeadminData, logOut } = loginSlice.actions

  export default loginSlice.reducer


