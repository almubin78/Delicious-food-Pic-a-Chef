import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [user,setUser] = useState(false)
    const headerInfo = {
        logo: 'https://i.ibb.co/vq4xzFB/logo-1-1.png', home: "Home", order: "Order NOw", register: "Register",login:'Login'
    }
    return (
        <div className='navigation'>
            <div className='img-container'>
                <img src={headerInfo.logo} alt="" />
            </div>
            <div className='navLink-container'>
                <NavLink className={({isActive,isPending})=>isActive ? 'active':'undefined'} to='/'>
                    {headerInfo.home}</NavLink>
                <NavLink to='contact'>{headerInfo.order}</NavLink>
                
                {
                    user? 'img':<NavLink to='/login'>{headerInfo.login}</NavLink> 
                }
            </div>
        </div>
    );
};

export default Header;