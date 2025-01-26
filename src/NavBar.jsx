import React from 'react'
import unnamed from './assets/unnamed.jpg'

const NavBar = () => {
  return (
    <div>
        <nav id='nav2'>
          <div id='div2'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
        </div>
        <img src={unnamed} width={150} height={70}></img>
        <input type="text" placeholder='Search....' id='input1'>
        
        </input>
        
        
        </nav>
    </div>
  )
}

export default NavBar