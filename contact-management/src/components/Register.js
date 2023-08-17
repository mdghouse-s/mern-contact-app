import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const API_URL = `${process.env.REACT_APP_API_URL}/api`;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [error, setError] = useState({});

    const navigate = useNavigate();

    const validate = () => {
        let errors = {};
        let isValid = true;

        if (!name) {
            isValid = false;
            errors.name = 'Please enter your name.';
        }

        if (!email) {
            isValid = false;
            errors.email = 'Please enter your email Address.';
        }

        if (!phone) {
            isValid = false;
            errors.phone = 'Please enter your phone number.';
        }

        if (!password) {
            isValid = false;
            errors.password = 'Please enter your password.';
        }

        if (!city) {
            isValid = false;
            errors.city = 'Please select your city.';
        }

        setError(errors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (!validate()) {
            return;
        }
      
        const newUser = {
            name,
            email,
            phone,
            password,
            city,
        };
        try {
            const response = await axios.post(`${API_URL}/register`, newUser);

            console.log('Server response:', response);
            if (response.data.status === 'error') {
                setError({ message: response.data.message });
                return;
            }
            navigate('/login');
            
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name" type="text" className="form-control" placeholder="Enter your name" required
                            onChange={(e) => setName(e.target.value)}
                        />
                        {error.name && <p className="text-danger">{error.name}</p>}
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email" type="email" className="form-control" placeholder="Enter your email" required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {error.email && <p className="text-danger">{error.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input
                            id="phone" type="tel" className="form-control" placeholder="Enter your phone" required
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        {error.phone && <p className="text-danger">{error.phone}</p>}

                    </div>
                    {/* Add dropdown for city with values of state capitals of India */}
                    <div>
                        <label htmlFor="city">City</label>
                        <select id="city" className="form-control" required
                            onChange={(e) => setCity(e.target.value)}
                        >
                            <option value="">Select City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Ahmedabad">Ahmedabad</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            id="password" type="password" className="form-control" placeholder="Enter your password" required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error.password && <p className="text-danger">{error.password}</p>}
                    </div>
                    {error.message && <p className="text-danger">{error.message}</p>}
                    <div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Register;