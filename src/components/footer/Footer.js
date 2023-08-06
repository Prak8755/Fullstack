import React from 'react'
import './footer.css';


const Footer = () => {
  return (
    <section className='f-wrapper'>
<div className='paddings innerWidth flexCenter f-container'>

{/* left side  */}
<div className='f-left flexColStart'>
    <img src='https://static.vecteezy.com/system/resources/thumbnails/008/646/755/small/real-estate-logo-design-vector.jpg' alt='logo' width={120}/>
    <span className='secondaryText'>We have your dream with us so , why <br/>worried any more ,we have got you covered </span>

</div>
{/* Right side  */}
<div className='flexColStart f-right'>
    <span className='primaryText'>Information</span>
    <span className='secondaryText'>123 New York Street</span>

    <div className='flexCenter f-menu'>
        <span>Property </span>
        <span>Services</span>
        <span>About us</span>
        <span>Products</span>
         </div>
</div>

</div>
    </section>
  )
}

export default Footer