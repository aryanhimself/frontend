import * as React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../static/css/Register.css'
// import '../static/fonts/iconic/css/material-design-iconic-font.min.css'
import { errorToast } from './common/toast';

export default function Registerform(){
  const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
        phone: '',
        pan: '',
        password: '',
        maritial_status: '',
    });
    
    const [passData, setPassData] = React.useState({
        password2: '',
    });

    const getServerIPAddress = () => {
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            return 'http://localhost:8000';
        } else {
            return `http://${window.location.hostname}:8000`;
        }
    };
    
    const API_BASE_URL = getServerIPAddress();

    const handleSubmit= async (e) => {
        e.preventDefault();
        if (
            !formData.first_name.trim() ||
            !formData.last_name.trim() ||
            !formData.email.trim() ||
            !formData.phone.trim() ||
            !formData.password.trim()
          ){
            toast('Please fill in all fields.', errorToast);
            return;
          }
          if (formData.password !== passData.password2) {
              toast('The passwords do not match!', errorToast);
              return;
          }
          axios.post(API_BASE_URL + '/auth/signup/', formData).then(_=> {
            navigate('/dashboard');
            return;
          }).catch(_ => {
            toast('something went wrong', errorToast);
          });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phone' && !isNaN(value)) {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        } else if (name !== 'phone') {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));

    };

    const handlePassValidation = (e) => {
        const {name, value} = e.target;
        setPassData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
      
    return(
      <div id='main_reg'>
        <div className="reg-form">
            <form key={1} method="POST" onSubmit={handleSubmit}>
            <h1 id = "cacc">Create an account</h1>
            <div class="name-input100">
                <span class="name-label-input100">First Name: </span>
                <input class="n-input100" type="text" name="first_name" onChange={handleInputChange}/>
            </div>
            <div class="name-input100">
                <span class="name-label-input100">Middle Name: </span>
                <input class="n-input100" type="text" name="middle_name" onChange={handleInputChange}/>
            </div>
            <div class="name-input100">
                <span class="lname-label-input100">Last Name: </span>
                <input class="ln-input100" type="text" name="last_name" onChange={handleInputChange}/>
            </div>
            <div class="wrap-input100">
                <span class="label-input100">Email: </span>
                <input class="input100" type="email" name="email" placeholder="Enter your Email" onChange={handleInputChange}/>
                <span class="focus-input100" data-symbol="&#x2709;"></span>
            </div>
            <div class="ph-wrap-input100">
                <span class="ph-label-input100">Phone Number: </span>
                <input class="ph-input100" type="text" name="phone" onChange={handleInputChange}/>
            </div>
            <div class="pn-wrap-input100">
                <span class="pn-label-input100">Pan No.: </span>
                <input class="pn-input100" type="text" name="pan" onChange={handleInputChange}/>
            </div>
            <div className="wrap-input100">
                <span className="label-input100">Maritial Status</span>
                <select className="input100"  name="maritial_status" placeholder="Maritial Status" onChange={handleInputChange}>
                  <option disabled selected>Select your maritial status</option>
                  <option value="married">Married</option>
                  <option value="unmarried">Unmarried</option>
                  <option value="divorced">divorced</option>
                </select>

            </div>
            <div class="wrap-input100">
                <span class="label-input100">Password: </span>
                <input class="input100" type="password" name="password" placeholder="Enter your password" onChange={handleInputChange}/>
                <span class="focus-input100" data-symbol="&#xf190;"></span>
            </div>
            <div class="wrap-input100">
                <span class="label-input100">Confirm Password: </span>
                <input class="input100" type="password" name="password2" placeholder="Re-Enter your password" onChange={handlePassValidation}/>
                <span class="focus-input100" data-symbol="&#xf190;"></span>
            </div>
            <div class="wrap-input100">
                <button class="register-btn">Create</button>
            </div>
            <p id="account-alr">Already have an account? <Link id="linkreg" to="/">Sign in here</Link></p>
            </form>
        </div>
    </div>
    );
};
