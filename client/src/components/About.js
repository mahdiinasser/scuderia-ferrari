import React, { useState, useEffect } from 'react';
import abt from '../images/about-us.png';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import '../admin-style/About.css'; 
import axios from 'axios';

const About = () => {
    const [aboutText, setAboutText] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAboutText = async () => {
            try {
                const response = await axios.get('/api/v1/about/');
                setAboutText(response.data.data[0].text); // Assuming only one about text exists
                setLoading(false);
            } catch (err) {
                console.error('Error fetching about text:', err);
                setError(`Error fetching about text: ${err.message}`);
                setLoading(false);
            }
        };

        fetchAboutText();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <div id='about' >
                <img src={abt} alt='about-us' id='about-us' />
                <div className='about-txt'>
                    <h1>About us</h1>
                    <p>{aboutText}</p>

                    <MDBBtn className='m-1 custom-btn' size='lg' href='https://www.facebook.com/ScuderiaFerrari'>
                        <MDBIcon fab icon='facebook-f' className='mdb-icon' />
                    </MDBBtn>

                    <MDBBtn className='m-1 custom-btn' size='lg' href='https://x.com/Scuderiaferrari'>
                        <MDBIcon fab icon='x-twitter' className='mdb-icon' />
                    </MDBBtn>

                    <MDBBtn className='m-1 custom-btn' size='lg' href='https://www.instagram.com/scuderiaferrari'>
                        <MDBIcon fab icon='instagram' className='mdb-icon' />
                    </MDBBtn>

                    <MDBBtn className='m-1 custom-btn' size='lg' href='https://www.tiktok.com/@ferrari'>
                        <MDBIcon fab icon='tiktok' className='mdb-icon' />
                    </MDBBtn>

                    <MDBBtn className='m-1 custom-btn' size='lg' href='https://www.twitch.tv/ferrariesports'>
                        <MDBIcon fab icon='twitch' className='mdb-icon' />
                    </MDBBtn>

                    <MDBBtn className='m-1 custom-btn' size='lg' href='https://www.linkedin.com/showcase/scuderiaferrari/'>
                        <MDBIcon fab icon='linkedin-in' className='mdb-icon' />
                    </MDBBtn>

                    <MDBBtn className='m-1 custom-btn' size='lg' href='https://www.youtube.com/user/ferrariworld'>
                        <MDBIcon fab icon='youtube' className='mdb-icon' />
                    </MDBBtn>

                </div>
            </div>
        </>
    );
};

export default About;
