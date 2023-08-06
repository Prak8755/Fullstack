import React, { useState } from 'react'
import './header.css';

import {BiMenuAltRight} from 'react-icons/bi';


const Header = () => {

  const [menu,setMenu]=useState(true);

function handleClick(){
  setMenu(!menu);
}

// function getMenuStyle(menu){
// if(document.documentElement.clientWidth<=800){
//   return {right:!menu&&"-100%"}
// }
// }

  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
        <img src='https://static.vecteezy.com/system/resources/previews/008/124/777/original/real-estate-logo-house-logo-home-logo-sign-symbol-free-vector.jpg' width={100} alt='logo'/>
    
       <div className="h-menu flexCenter" style={{right:menu&&'-100%'}}>

<a href="/">Residencies</a>
<a href="/">Value</a>
<a href="/">Contact us</a>
<a href="/">Get started</a>
<button className='button'>
   <a href='/'>Contact</a>
</button>
</div>
       
             {/* For small screen size navbar */}
   
   <div className='menu-icon' onClick={handleClick}>
<BiMenuAltRight size={30}/>
      </div>
      </div>

 
    </section>
  )
}

export default Header