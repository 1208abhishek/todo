import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { LabelledInput } from './LabelledInput';
import { useState } from 'react';
import { Button } from './Button';
import PropTypes from 'prop-types';  // Import PropTypes

export const AuthComponent = ({ mode = "signup" }) => {
    const [username, setUsername] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");  
    

    const navigate = useNavigate(); 


    const handleSubmit = async () => {
        const endpoint = mode === "signup" 
            ? "http://localhost:3000/api/v1/user/signup" 
            : "http://localhost:3000/api/v1/user/signin";

        const payload = mode === "signup" 
            ? { username, email, password } 
            : { email, password };

        try {
            const response = await axios.post(endpoint, payload);
            
            // Ensure the token is received before saving it
            if (response.data.token) {
                // Store JWT token in localStorage
                localStorage.setItem("token", response.data.token);

                // Navigate to TodoDashboard after successful signup/signin
                navigate('/TodoDashboard');
            } else {
                console.error("No token received");
            }
        } catch (error) {
            console.error("Error during authentication:", error);
        }
    };


    return (
        <div>
            <div>
                {mode === "signup" ? "Create an Account?" : "Sign in to your Account"}
            </div>
            <div>
                {mode === "signup" ? (
                    <>
                        Already have an account? <Link to="/signin">Login</Link>
                    </>
                ) : (
                    <>
                        Don't have an account? <Link to="/signup">Sign up</Link>
                    </>
                )}
            </div>

            <div>
                {mode === "signup" && (
                    <LabelledInput 
                        label="Username" 
                        onChange={(e) => setUsername(e.target.value)} 
                        placeholder="Enter username" 
                    />
                )}

                <LabelledInput 
                    label="Email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="example@email.com" 
                />

                <LabelledInput 
                    type="password" 
                    label="Password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Enter password..." 
                />
            </div>

            <div>
                <Button label={mode === "signup" ? "Sign up" : "Sign in"} onClick={handleSubmit} />
            </div>
        </div>
    );
};

// Define PropTypes for mode prop
AuthComponent.propTypes = {
    mode: PropTypes.oneOf(["signup", "signin"]),  // 'mode' must be either 'signup' or 'signin'
};

