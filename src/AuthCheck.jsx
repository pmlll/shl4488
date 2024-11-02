// AuthCheck.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth'; // Import onAuthStateChanged from firebase/auth
import { auth } from './firebase'; // Import the auth instance

const AuthCheck = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => { // Use the auth instance
            setLoading(false);
            if (!user) {
                // User is not logged in, navigate to login page
                navigate('./login');
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [navigate]);

    if (loading) {
        return <div>Loading...</div>; // Show a loading state while checking auth
    }

    return <>{children}</>; // Render children if user is authenticated
};

export default AuthCheck;
