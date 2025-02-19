// src/AboutUs.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AboutUs = () => {
    const [aboutData, setAboutData] = useState({ paragraph: '', imageUrl: '' });

    useEffect(() => {
        axios.get('http://localhost:7002/api/about')
            .then(response => {
                setAboutData(response.data);
            })
            .catch(error => {
                console.error('Error fetching about data:', error);
            });
    }, []);

    return (
        <div>
            <h1>About Us</h1>
            <p>{aboutData.paragraph}</p>
            {aboutData.imageUrl && <img src={aboutData.imageUrl} alt="About Us" />}
        </div>
    );
};

export default AboutUs;
