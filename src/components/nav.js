import React, { Component } from 'react';
import logo from '../assets/img/tip.png'
import {Link} from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
    <div>
        <div className='flex p-5 px-3 w-screen justify-between items-center'>
        <div className='flex items-center'>
            <img src={logo} className='w-8 h-8'/>
            <span class="text-sky-600 font-extrabold text-[20px]">TipDem</span>
            </div>

            <div>
            <Link to='/' class='text-sky-600 font-medium text-sm hover:text-white'>Home</Link>
                <Link to='/about' class='text-sky-600 px-3 font-medium text-sm hover:text-white'>About</Link>
            

                <a href='https://twitter.com/_realao' target='_blank' rel="noreferrer">
                <i className='fa fa-twitter text-sky-600 bg-sky-200 text-[20px] font-bold p-2 px-[9px] rounded-lg mr-1 hover:bg-sky-600 hover:text-sky-200'></i></a>
            </div>
    </div>
    </div>
    );
  }
}
