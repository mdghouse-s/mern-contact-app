
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';




const API_URL = `${process.env.REACT_APP_API_URL}/api`;

const Login = () => {
    const { setAuth } = useAuth();

// Login component with email and password fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});
    const navigate = useNavigate();
    const validate = () => {
        let errors = {};
        let isValid = true;
        if (!email) {
            isValid = false;
            errors.email = 'Please enter your email Address.';
        }
        if (!password) {
            isValid = false;
            errors.password = 'Please enter your password.';
        }
        setError(errors);
        return isValid;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }
        const user = {
            email,
            password,
        };
        try {
            const response = await axios.post(`${API_URL}/login`, user);
            localStorage.setItem('token', response.data.token);
            setAuth(true);
            navigate('/contacts');
        } catch (error) {
            if (error.response) {
                if (error.response.status === 403) {
                    setError({
                        server: error.response.data.message,
                    });
                }
            }
        }
    };

    return (
        <div className="container">
            <div className="py-4">
             
                <p className="h6">Login to your account</p>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="email">Email</label>
                            <input

                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            {error.email && (
                                <div className="alert alert-danger">{error.email}</div>
                            )}
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password">Password</label>
                            <input

                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {error.password && (
                                <div className="alert alert-danger">{error.password}</div>
                            )}
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </form>
                    {error.server && (
                        <div className="alert alert-danger">{error.server}</div>
                    )}
                </div>
            </div>
        </div>

    );
}

export default Login;