import React, { useState } from 'react';  
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';  
import './Reviewform.css'; // Optional: for custom styling  

const ContactForm = () => {  
    const [formData, setFormData] = useState({  
        fullName: '',  
        email: '',  
        message: '',  
    });  

    const handleChange = (e) => {  
        const { name, value } = e.target;  
        setFormData({ ...formData, [name]: value });  
    };  

    const handleSubmit = (e) => {  
        e.preventDefault();  
        // Process form submission here (e.g., send data to server)  
        console.log('Submitted data:', formData);  
    };  

    return (  
        <div className="contact-form-container">  
            <h2>Contact Us</h2>  
            <form onSubmit={handleSubmit}>  
                <div className="form-group">  
                    <label htmlFor="fullName">Full Name</label>  
                    <input  
                        type="text"  
                        name="fullName"  
                        value={formData.fullName}  
                        onChange={handleChange}  
                        required  
                    />  
                </div>  

                <div className="form-group">  
                    <label htmlFor="email">Email</label>  
                    <input  
                        type="email"  
                        name="email"  
                        value={formData.email}  
                        onChange={handleChange}  
                        required  
                    />  
                </div>  

                <div className="form-group">  
                    <label htmlFor="message">Message</label>  
                    <textarea  
                        name="message"  
                        value={formData.message}  
                        onChange={handleChange}  
                        required  
                    ></textarea>  
                </div>  

                <button type="submit">Send Message</button>  
            </form>  

            <div className="contact-info">  
                <div>  
                    <FaPhoneAlt className='icon'/> <a href="tel:+1234567890">+1 (234) 567-890</a>  
                </div>  
                <div>  
                    <FaEnvelope className='icon'/> <a href="mailto:info@example.com">info@example.com</a>  
                </div>  
            </div>  
        </div>  
    );  
};  

export default ContactForm;