import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

const AuthCheck = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(false);
            if (!user) {
                navigate('./login');
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default AuthCheck;
