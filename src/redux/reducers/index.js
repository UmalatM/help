import {combineReducers} from "redux";
import authModal from "./authModalReducer";

export const rootReducer =combineReducers ({
  authModal,
})