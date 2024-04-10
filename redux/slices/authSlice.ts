import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
const cookieStore = new Cookies();
const userData = cookieStore.get("user-profile");
export interface IAuthState {
  authState: {};
}

const initialState: IAuthState = {
  authState:
    userData === null
      ? {
          username: "",
          email: "",
          password: "",
          picture: "",
        }
      : userData,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => {
      state.authState = action.payload;
    },
  },
});

export const { setAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;
