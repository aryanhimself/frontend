import React, { useState} from 'react';
import axios from 'axios';
import { Link,  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../static/css/Login.css'
import { errorToast, successToast } from './common/toast';

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formKey, ] = useState(0);
  const navigate = useNavigate();
  const validateForm = (formData) => {
    if (
      !formData.email.trim() ||
      !formData.password.trim()
      ){
        toast('Please fill in all fields.', errorToast);
        return false;
      }
    return true;
  };

  
  const handleSubmit= (e) =>{
    e.preventDefault();
    if(!validateForm(formData)) return;
    axios.post(`${process.env.REACT_APP_API_URI}/auth/login/`, formData, {
      withCredentials: true,
      headers: {
      'X-CSRFToken': getCookie('csrftoken'),
      
      "Content-Type":'application/json'
    }})
    .then(_=> {
      toast('Login Successful', successToast);
      localStorage.setItem('go', 'true');
      navigate('/dashboard'); 
    }).catch(_ =>{
      toast('Incorrect Login Details!', errorToast);
    }); 
  };

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
          ...prevState,
          [name]: value,
      }));
  };

  return (
    <div id="main">
      <div className="container">
      <div className="login-form">
        <form key={formKey} action="" method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
          <h1 id = "wb">Welcome Back!</h1>
          <div className="wrap-input100">
            <span className="label-input100">Email: </span>
            <input className="input100" type="text" name="email" placeholder="Enter your email" onChange={handleInputChange}/>
            <span className="focus-input100" data-symbol="&#x2709;"></span>
          </div>
          <div className="wrap-input100">
            <span className="label-input100">Password: </span>
            <input className="input100" type="password" name="password" placeholder="Enter your password" onChange={handleInputChange}/>
            <span className="focus-input100" data-symbol="&#xf190;"></span>
          </div>
          <a href="/forget-password" id="for-pass">Forgot Password?</a>
          <div className="wrap-input100">
            <button className="login-btn">Login</button>
          </div>
          <span id="account">Don't have an account?</span><br/>
          <nav>
            <Link id="loginlink" to="/auth/signup"> Create an account</Link>
          </nav>
        </form>
      </div>
    </div>
    </div>
  );
};
