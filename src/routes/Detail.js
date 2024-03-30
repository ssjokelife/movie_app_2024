import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Detail() {
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location);
    useEffect(() => {
        if (location.state == null) {
            navigate('/');
        }
    }, [location, navigate]);

    return (
        <span>{location.state.title}</span>
    );
}

export default Detail;