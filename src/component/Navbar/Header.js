import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { VarContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const {user} = useContext(VarContext);
    // console.log(user);
    const headerInfo = {
        logo: 'https://i.ibb.co/vq4xzFB/logo-1-1.png', home: "Home", order: "Order NOw", register: "Register",login:'Login',blog:'Blog',SignOut:'Sign Out'
    }
    const handleSignOut = () =>{

    }
    return (
        <div className='navigation  p-3 h-100'>
            <div className='img-container'>
                <img src={headerInfo.logo} alt="" />
            </div>
            <div className='navLink-container'>
                <NavLink className={({isActive,isPending})=>isActive ? 'active':'undefined'} to='/'>
                    {headerInfo.home}</NavLink>
                <NavLink to='/blog'>{headerInfo.blog}</NavLink>
                
                {
                    user? 'img':<>
                    
                    <NavLink to='/register'>{headerInfo.register}</NavLink>
                    <NavLink to='/back' onClick={handleSignOut}>{headerInfo.SignOut}</NavLink>
                    </> 
                }
            </div>
        </div>
    );
};

export default Header;