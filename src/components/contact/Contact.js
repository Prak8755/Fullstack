import React from "react";

import "./contact.css";
import { MdCall } from "react-icons/md";
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';
import {AiFillVideoCamera} from 'react-icons/ai';

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left ">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText extra">Easy to contact us</span>
          <span className="secondaryText">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br />
            tempor incididunt ut labore et dolore magna aliqua
          </span>

          {/* Mode  */}
          <div className="flexCenter contactModes">
            {/* First row */}
          <div className=" row">
            {/* First mode */}
            <div className="flexCenter mode">
              <div className="flexCenter">
                <div className="flexCenter icon">
                  <MdCall size={20} />
                </div>
                <div className="flexColStart detail ">
                  <span className="primaryText">call</span>
                  <span className="secondaryText">+91-828392948</span>
                </div>
              </div>
              <div className="flexCenter button ">
                Call Now
              </div>
            </div>

            {/* Second mode */}
            <div className="flexCenter mode">
              <div className="flexCenter">
                <div className="flexCenter icon">
                  <BsFillChatDotsFill size={20} />
                </div>
                <div className="flexColStart detail ">
                  <span className="primaryText">Chat</span>
                  <span className="secondaryText">+91-828392948</span>
                </div>
              </div>
              <div className="flexCenter button ">
                Chat Now
              </div>
            </div>

          </div>

          {/* Second row */}
          <div className=" row">
            {/* First mode */}
            <div className="flexColCenter mode">
              <div className="flexCenter">
                <div className="flexCenter icon">
                  <AiFillVideoCamera size={20} />
                </div>
                <div className="flexColStart detail ">
                  <span className="primaryText">Video call</span>
                  <span className="secondaryText">+91-828392948</span>
                </div>
              </div>
              <div className="flexCenter button ">
                Video Call Now
              </div>
            </div>

            {/* Second mode */}
            <div className="flexColCenter mode">
              <div className="flexCenter">
                <div className="flexCenter icon">
                  <HiChatBubbleBottomCenter  size={20} />
                </div>
                <div className="flexColStart detail ">
                  <span className="primaryText">Message</span>
                  <span className="secondaryText">+91-828392948</span>
                </div>
              </div>
              <div className="flexCenter button ">
                Message Now
              </div>
            </div>

          </div>

        </div>
        </div>

        

       

        {/* right side  */}
        <div className=" flexCenter c-right">
          <div className="image-container">
            <img src="https://www.dealpath.com/wp-content/uploads/2021/07/types-of-commercial-real-estate-scaled-585x285px.png" alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
