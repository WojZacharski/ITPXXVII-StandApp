import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'; 
import './login.css';

const predefinedPassword = process.env.REACT_APP_PASSWORD;

export const Login = () => {
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();
    const { login } = useAuth(); 

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password === predefinedPassword) {
            setErrorMessage('');
            login(); 
            history.push('/map');
        } else {
            setErrorMessage("Wrong password.");
        }
    };

    return (
        <div className="login-container">
            <h2>ITP StandApp</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="input-field"
                    />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button type="submit" className="submit-button">Login</button>
            </form>
        </div>
    );
};

export default Login;
