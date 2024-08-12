import React from 'react';
import './Register.css';

const Register = ({ onClose }) => {
    return (
        <div className="wrapper2">
            <span className="icon-close" onClick={onClose}>
                <ion-icon name="close"></ion-icon>
            </span>
            <div className="form-box">
                <h2>Register</h2>
                <form>
                    <div className="input-box">
                        <div className="label-align">
                            <span className="icon"><ion-icon name="person-circle-outline"></ion-icon></span>
                            <label>User Name</label>
                        </div>
                        <input className="input" type="text" required />
                    </div>
                    <div className="input-box">
                        <div className="label-align">
                            <span className="icon"><ion-icon name="mail"></ion-icon></span>
                            <label>Email</label>
                        </div>
                        <input className="input" type="email" required />
                    </div>
                    <div className="input-box">
                        <div className="label-align">
                            <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                            <label>Password</label>
                        </div>
                        <input className="input" type="password" required />
                    </div>
                    <button type="submit" id="btn">Register</button>
                    <div className="login-register">
                        <p>Already have an account? <a href="#" className="register-link">Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
