import { configureStore } from "@reduxjs/toolkit";
import userMail from "../features/UserLoginSlice";
import login from '../account/Login'
// import
export const store = configureStore({
  reducer: {
    login:login,
    userMail: userMail,
  },
});