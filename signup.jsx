import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    pass: '',
    confirmPass: '',
    address: '',
    mobile: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSignup = (event) => {
    event.preventDefault();

    
    if (Object.values(formData).some(value => value === "")) {
      alert("All fields are required.");
      return;
    }

    
    if (formData.pass !== formData.confirmPass) {
      alert("Passwords do not match!");
      return;
    }

   
    alert("Account created successfully!");
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="content">
      <h1>Sign Up</h1>
      <form className="signup-form" onSubmit={handleSignup}>
        <div className="form-columns">
          {/* Left Column matching your HTML */}
          <div className="column">
            <label htmlFor="fname">First Name</label><br />
            <input type="text" id="fname" placeholder="First Name" onChange={handleChange} /><br /><br />

            <label htmlFor="lname">Last Name</label><br />
            <input type="text" id="lname" placeholder="Last Name" onChange={handleChange} /><br /><br />

            <label htmlFor="email">Email Address</label><br />
            <input type="email" id="email" placeholder="Email Address" onChange={handleChange} /><br /><br />

            <label htmlFor="pass">Password</label><br />
            <input type="password" id="pass" placeholder="Password" onChange={handleChange} />
          </div>

          {/* Right Column matching your HTML */}
          <div className="column">
            <label htmlFor="confirmPass">Confirm Password</label><br />
            <input type="password" id="confirmPass" placeholder="Confirm Password" onChange={handleChange} /><br /><br />

            <label htmlFor="address">Home Address</label><br />
            <input type="text" id="address" placeholder="Home Address" onChange={handleChange} /><br /><br />

            <label htmlFor="mobile">Mobile Number</label><br />
            <input type="tel" id="mobile" placeholder="Mobile Number" onChange={handleChange} />
          </div>
        </div>

        <div className="button-container">
          <button type="submit" className="submit">Register</button>
          <button type="button" className="submit" onClick={() => navigate('/login')}>
            Have an account? Login here!
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;