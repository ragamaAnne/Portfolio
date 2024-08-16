import React from 'react';
import './styles/style.css';
import { useState } from 'react';


function Contact()  {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
  
    console.log({

      name,
      name,
      email,
      phone,
      message,
    });
  };

  return (
    <div class="Contact">
    
        <div class="contactimage">

        </div>

        <div class="form">
        <form onSubmit={handleSubmit}>
          <div id='column'>
            {/* FirstName Field */}
            <div className="form-group">
            <label htmlFor="name">First name:</label>
            <input
              type="text"
              id="fname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

            {/* LastName Field */}
            <div className="form-group">
            <label htmlFor="name">Last Name:</label>
            <input
              type="text"
              id="lname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          </div>
        
        <div id='column'>
            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Phone Number Input */}
         <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="phone"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="[0-9]{10}" // Example pattern for a 10-digit phone number
            placeholder="1234567890"
            required
          />
        </div>
        </div>
        

        {/* Message Field */}
        <div id="message">
          <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            required
          />
        </div>

        </div>
        
        {/* Submit Button */}
        <div className="form-group">
          <button type="submit" id="btn">Submit</button>
        </div>
      </form>
        </div>

    </div>
  

  );
}

export default Contact;
