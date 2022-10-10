
import React, {useState} from 'react';
import Header from '../Header'
import CardList from '../CardList';
import {Outlet, Link} from "react-router-dom"
import '../HomePage.css'


function  HomePage() {
  return(
    <table>
    <tr>
        <td className="Dev">
            DEV@Deakin
        </td>
        <td className="Search"> 

  <div className="search">
    <input type="text123"
    name="search"
      label="Search"
    />
  </div>
        </td>
        <td>
        <Link className='Post' to='/'>
    Post
    </Link>

        </td>
        <td>
        <Link className='link' to='Login'>
    Login
    </Link>
        </td>
    </tr>

   </table>
    );
}
export default HomePage;