import React from "react"
import cls from "./login.module.scss";
import { AUTH_MODAL_TYPES } from "@/redux/types/authModalTypes";
import { useDispatch } from "react-redux";
import { MODAL_VIEW } from "@/components/Navbar/Navbar";

const Login = (authModal) => {
  const dispatch = useDispatch ();

  const onOpenRegister = () => {
    dispatch ({
   type:AUTH_MODAL_TYPES.MODAL,
   payload:{...authModal,view:MODAL_VIEW.REGISTER},
  });
  }; 

  return (
   <div>
    <button onClick={onOpenRegister}>Регистрация</button>
  </div>
  );
};

export default Login;
