import React from 'react'
import logo from "../../assets/bookmyshow-logo.png"
import './header.css';
import { FaSearch } from 'react-icons/fa'
const Header = () => {
  return (
    <div className='nav-bar'>
        {/* Top NavBar */}
        <div className='nav-padding'>
            <div className='nav-content'>
                {/* Left Part */}
                <div className='logo-container'>
                    <img src={logo} alt='logo' className='logo-image' />
                </div>

                <div className='search-container'>
                    <input type='text'
                    placeholder=' Search for Movies, Stream, Events, Plays, Sports, Activities'
                    name='name'
                    className='search-bar' 
                    />
                    <FaSearch className="search-icon"/>
                
                </div>

                {/* Right Part */}
               
                <div className='location-container'>
                    Bengaluru &#9660; 
                </div>
                <button className='sign-in'>
                    Sign in
                </button>
               
            </div>
            
        </div>

        {/* Bottom NavBar */}
        <div className='bottom-nav-padding'>
            <div className='bottom-nav-content'>
                <div className='bottom-left-content'>
                    <span className='left-content'>Movies</span>
                    <span className='left-content'>Stream</span>
                    <span className='left-content'>Events</span>
                    <span className='left-content'>Plays</span>
                    <span className='left-content'>Sports</span>
                    <span className='left-content'>Activities</span>
                </div>

                <div className='bottom-right-content'>
                    <span className='right-content'>ListYourShow</span>
                    <span className='right-content'>Corporates</span>
                    <span className='right-content'>Offers</span>
                    <span className='right-content'>Gift Cards</span>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Header