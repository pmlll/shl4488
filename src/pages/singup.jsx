import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/login");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    return (
        <main style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#333',
            color: '#fff'
        }}>
            <section>
                <div style={{
                    width: '100%',
                    maxWidth: '400px',
                    padding: '40px',
                    backgroundColor: '#444',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    textAlign: 'center'
                }}>
                    <h1 style={{
                        fontSize: '28px',
                        fontFamily: '"Monsieur La Doulaise", sans-serif',
                        fontWeight: '100',
                        marginBottom: '20px',
                        color: '#fff'
                    }}>
                        SignUp
                    </h1>

                    <form>
                        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                            <label htmlFor="email-address" style={{
                                fontSize: '14px',
                                marginBottom: '5px',
                                color: '#ccc'
                            }}>
                                Email address
                            </label>
                            <input
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Email address"
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    border: '1px solid #555',
                                    borderRadius: '4px',
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    fontSize: '16px',
                                    transition: 'border-color 0.3s ease'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                            <label htmlFor="password" style={{
                                fontSize: '14px',
                                marginBottom: '5px',
                                color: '#ccc'
                            }}>
                                Password
                            </label>
                            <input
                                type="password"
                                label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Password"
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    border: '1px solid #555',
                                    borderRadius: '4px',
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    fontSize: '16px',
                                    transition: 'border-color 0.3s ease'
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            onClick={onSubmit}
                            style={{
                                width: '100%',
                                padding: '12px',
                                backgroundColor: 'transparent',
                                color: '#fff',
                                border: '1px solid #fff',
                                borderRadius: '4px',
                                fontSize: '16px',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s ease, color 0.3s ease'
                            }}
                        >
                            Sign up
                        </button>
                    </form>

                    <p style={{
                        fontSize: '14px',
                        color: '#ccc',
                        marginTop: '20px'
                    }}>
                        Already have an account?{' '}
                        <NavLink to="/login" style={{
                            color: '#fff',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease'
                        }}
                                 onMouseEnter={(e) => e.target.style.color = '#aaa'}
                                 onMouseLeave={(e) => e.target.style.color = '#fff'}
                        >
                            Log in
                        </NavLink>
                    </p>
                </div>
            </section>
        </main>
    );
}

export default Signup;
