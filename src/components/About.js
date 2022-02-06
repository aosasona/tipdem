import React, { Component } from 'react';
import Nav from './nav'
import Footer from './Footer';
import logo from '../assets/img/tip.png';

export default class About extends Component {
  render() {
    return (
    <div>
      <Nav />
      <center>
        <div class='flex w-screen h-[90vh] justify-center items-center'>
      <div className='mx-0 antialiased'>
        
        <div className='block'><img src={logo} class='w-2/6 lg:w-1/6'/></div>

      <div class='block relative w-5/6 p-2'>

      <h1 className='font-bold text-sky-600 text-4xl'>TipDem</h1>

      <p class='text-gray-400 text-xs lg:text-sm mt-5 lg:mt-7'>TipDem is a ReactJS side-project developed by <a href='https://twitter.com/_realao' target='_blank' rel='noreferrer' class='text-sky-500'>Ayodeji</a> to easily calculate tips online. Although, this could have been written in VanillaJS, it serves as a practice project for the dev and could also serve as a practice project for other devs, the public repo link is available below.
      
      <a href='https://github.com/aosasona/tipdem' target='_blank' rel='noreferrer' class='text-sky-500 block mt-5 hover:text-white'>View on GitHub</a>
      <span className='text-gray-600 block mt-2'>Current Version: <b>1.0.0</b></span>
      
      </p>
        </div>
        </div></div>
        </center>
      <Footer />
    </div>
    );
  }
}
