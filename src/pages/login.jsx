import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/");
                console.log(user);
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
                    <p style={{
                        fontSize: '28px',
                        fontFamily: '"Monsieur La Doulaise", sans-serif',
                        fontWeight: '100',
                        marginBottom: '20px',
                        color: '#fff'
                    }}>
                        Login
                    </p>

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
                                id="email-address"
                                name="email"
                                type="email"
                                required
                                placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)}
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
                                id="password"
                                name="password"
                                type="password"
                                required
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
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

                        <div>
                            <button
                                onClick={onLogin}
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
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="text-sm text-white text-center" style={{
                        fontSize: '14px',
                        color: '#ccc',
                        marginTop: '20px'
                    }}>
                        No account yet?{' '}
                        <NavLink to="/singup" style={{
                            color: '#fff',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease'
                        }}
                                 onMouseEnter={(e) => e.target.style.color = '#aaa'}
                                 onMouseLeave={(e) => e.target.style.color = '#fff'}
                        >
                            Sign up
                        </NavLink>
                    </p>
                </div>
            </section>
        </main>
    );
}

export default Login;
