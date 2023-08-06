import React, { useState } from 'react';
import './value.css';
import {
    Accordion,
AccordionItem,
AccordionItemHeading,
AccordionItemButton,
AccordionItemPanel,
AccordionItemState
} from 'react-accessible-accordion';

import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md';

import data from './Accordion';

const Value = () => {
    const [className,setClassName]=useState(null);

  return (
    <section className='v-wrapper'>
<div className='paddings innerWidth flexCenter v-container'>
    {/* left side  */}
    <div className='v-left'>
        <div className='image-container'>
            <img src='https://images.ctfassets.net/pdf29us7flmy/2HQEo1XZYGaUuNM5JHcakg/a2d075ae3b6d1f2c984f338e84c61f1d/-IND-001-45-_How_Much_Does_a_Typical_Real_Estate_Agent_Make_Final.png' alt='acc'/>
        </div>
    </div>
    {/* right side  */}
    <div className=' flexColStart v-right'>
        <span className='orangeText'>Our value</span>
        <span className='primaryText'>Value is given to our customers</span>
        <span className='secondaryText'>we always help our customers to look for a good space <br/>which is most suitable for them according to their comfort</span>

        <Accordion className='accordion' allowMultipleExpanded={false} preExpanded={[0]}>
{data.map((item,i)=>{return (<AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
<AccordionItemHeading>
    <AccordionItemButton className='flexCenter accordionButton'>
        <AccordionItemState>
            {({expanded})=>expanded?setClassName('expanded'):setClassName('collapsed')}
        </AccordionItemState>
<div className='flexCenter icon'>{item.icon}</div>
<span className='primaryText'>{item.heading}</span>
<div className='flexCenter icon'><MdOutlineArrowDropDown size={20}/> </div>
    </AccordionItemButton>
</AccordionItemHeading>
<AccordionItemPanel>
    <p className='secondaryText'>{item.detail}</p>
</AccordionItemPanel>
</AccordionItem>)})}
        </Accordion>
    </div>
</div>
    </section>
  )
}

export default Value