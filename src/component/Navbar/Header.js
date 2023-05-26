import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const headerInfo = {
        logo: 'https://i.ibb.co/vq4xzFB/logo-1-1.png', home: "Home", contact: "Contact Us", register: "Register"
    }
    return (
        <div className='navigation'>
            <div className='img-container'>
                <img src={headerInfo.logo} alt="" />
            </div>
            <div className='navLink-container'>
                <NavLink className={({isActive,isPending})=>isActive ? 'active':'undefined'} to='/'>
                    {headerInfo.home}</NavLink>
                <NavLink to='contact'>{headerInfo.contact}</NavLink>
                <NavLink to='/register'>{headerInfo.register}</NavLink>
            </div>
        </div>
    );
};

export default Header;