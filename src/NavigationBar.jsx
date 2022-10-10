import React from "react";
import {Outlet, Link} from "react-router-dom"
function NavigationBar()
{
    return  <div>
            <Link className='link' to='/'>
    Home
    </Link>
    <Link className='link' to='Login'>
    Login
    </Link>
    <Link className='link' to='/Signup'>
    Signup
    </Link>
    <Outlet />
    </div>
}
export default NavigationBar