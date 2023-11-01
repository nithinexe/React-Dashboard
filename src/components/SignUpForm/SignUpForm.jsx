import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React, { useState } from 'react';
import './SignUpForm.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    Email: '',
    Password: '',
    passwordAgain: '',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="sales-box">
      <div className="logo">
        <img src="bcdc.jpeg" alt="Logo" width="300" />
      </div>
      <h2 className="title">SignUp</h2>
      <div className="input-group">
        <label>UserName:</label>
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Email:</label>
        <input
          type="text"
          name="Email"
          value={formData.Email}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Password:</label>
        <input
          type="text"
          name="Password"
          value={formData.Password}
          onChange={handleChange}
        />
      </div>
       <div className="input-group">
        <label>Re-enter Password:</label>
        <input
          type='text'
          name="Password"
          value={formData.passwordAgain}
          onChange={handleChange}
        />
      </div>
      <div className="button-group">
        <button className='createButton'>Create</button>
        <button className='cancelButton'>Cancel</button>
        <button className='uploadDocsButton'>SignIn</button>
      </div>
    </div>
  );
}
export default SignUpForm;

