import React from "react";
import cls from "./navbar.module.scss";

import Logo from "@/assets/Logo.png";
import NavSearch from "./NavSearch/NavSearch";
import {Button,ButtonVariant,Icon, Modal } from "@/components";
import { navList } from "@/utils/conts";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_MODAL_TYPES } from "@/redux/types/authModalTypes";

const Navbar = () => {
   const isAuth = false;
   const dispatch = useDispatch ();
   const authModal = useSelector ((state)=> state.authModal);

   const onOpen = () => {
    dispatch({type: AUTH_MODAL_TYPES.MODAL,
    payload: {...authModal, open:true },
  });

   }

  return (  
    <div className={cls.navbar}>
    <div className= "container">
    <div className={cls.wrap}>
        <img src={Logo} alt="" />

        <NavSearch/>

        
        {isAuth ? (
            <nav>
          <ul className={cls.navList}>
            {navList.map((item)=>(
            <li key={item.id}>
              
                  
            {item.to ? (<a href="">
            <Icon type={item.iconType}/>

            </a> ): (<Icon type={item.iconType}/>)
              }
            </li>
          ))}
          </ul>
          
            </nav>
          ): (<Button variant={ButtonVariant.OUTLINE} onClick={onOpen}>
            Войти
            </Button>
          
          )}
     </div>
    </div>

   <Modal open={authModal.open}> 
    smefoegm
</Modal>

  </div>
    );
};

export default Navbar;
