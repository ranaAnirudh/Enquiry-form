import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reference:"",
    email:"",
    emp_code:"",
    department:"",
    position:"",
    type:"",
    description:"",
};

const userMail = createSlice({
  name: "userMail",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) =>{
        console.log(action);
        state.reference = action.payload.reference;
        state.email = action.payload.email;
        state.emp_code = action.payload.emp_code;
        state.department = action.payload.department;
        state.position = action.payload.position;
        state.type = action.payload.type;
        state.description = action.payload.description;
      },
    //   setSignOutState: (state) => {
    //     state.name = null;
    //     state.email = null;
    //     state.photo = null;
    //     state.isnewUser = null;
    //     state.uid = null;
    //   },
    },
  });
    export const {
        setUserLoginDetails,
      } = userMail.actions;
      
      export const selectUserReference = (state) => state.userMail.reference;
      export const selectUserEmail = (state) => state.userMail.email;
      export const selectUserEmp_code = (state) => state.userMail.emp_code;
      export const selectUserDepartment = (state) => state.userMail.department;
      export const selectUserPosition = (state) => state.userMail.position;
      export const selectUserType = (state) => state.userMail.type;
      export const selectUserDescription = (state) => state.userMail.description;
      
      export default userMail.reducer;