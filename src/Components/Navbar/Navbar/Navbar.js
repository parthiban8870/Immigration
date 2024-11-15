import React, { Component } from 'react'
import './Navbar.css'


class Navbar extends Component{
    state={clicked:false}
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
  return (
    <div className='navbar'>
<a href="App.js">
    <img src="https://clipground.com/images/golden-eagle-logo-png-8.png" alt="img not found" className='logo'/>
</a>
        <div>

        <ul id='nav-item' className={this.state.clicked?"#nav-item active":"#nav-item"}>

        <img src="https://clipground.com/images/golden-eagle-logo-png-8.png" alt="img not found" className='logo-1'/>

        <div id='time'  onClick={this.handleClick}><i  className={"fas fa-times"}></i></div>
        
        <br /><br />

        <div id='home'>
            <li><a href="About.js">About US</a></li>
            <li><a href="Visa.js">VISA Services</a></li>
            <li><a href="Migration.js">Migration News</a></li>
            <li><a href="Testimonials.js">Testimonials</a></li>
            <li><a href="Faq.js">FAQ</a></li>
            <li><a href="Contact.js">Contact</a></li>
        </div>
           
        
        <br /><br />
        
        <div id='somed' className='socialmedia'>
            <li><a href="facebook.js"><i className='fa-brands fa-facebook'></i></a></li>
            <li><a href="twitter.js"><i className='fa-brands fa-x-twitter'></i></a></li>
            <li><a href="google.js"><i className='fa-brands fa-google'></i></a></li>
            <li><a href="linkedin.js"><i className='fa-brands fa-linkedin'></i></a></li>
            <li><a href="youtube.js"><i className='fa-brands fa-youtube'></i></a></li>
        </div>
            
        </ul> 
        </div>

        <div id='mobile' onClick={this.handleClick}>
            <i id='bar' className={"fas fa-bars"}></i>
        </div>
        

       
        
    </div>
  )
}
}

export default Navbar