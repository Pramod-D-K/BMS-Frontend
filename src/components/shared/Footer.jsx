import React from 'react'

import "./footer.css";

import logo from "../../assets/bookmyshow-logo.png"

import { FaFacebookF, FaLinkedin, FaLinkedinIn, FaPinterest, FaPinterestP, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='footer-padding'>
      <div className='footer-container'>
        <div className='logo-container'>
          <img src={logo} alt='logo' className='logo'/>
        </div>
        <div className='footer-icons'>
          <FaFacebookF className='icon'/> 
          <FaXTwitter className='icon'/>
          <FaYoutube  className='icon'/>
          <FaPinterestP className='icon'/>
          <FaLinkedinIn  className='icon'/>
        </div>
      </div>
      <div className='copyright-container'>
        <p className='copyright-above'>
        Copyright 2026 Bigtree Entertainment Private Limited. All rights reserved.
        </p>
        <small className='copyright-below'>
          Content and images used on this sites are copyright-protected
          and copyright vests with the respective owners.
          Usage of content and images on this website is intended
          to promote the work and no endorsement of artist shall be implied. 
          Unauthorized use is prohibited and punishable by law.
        </small>
      </div>
      
    </footer>
  )
}

export default Footer