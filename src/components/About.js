import React from 'react';
import about from '../images/about-us.png';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import '../About.css'; 


const About = () => {
<<<<<<< Updated upstream:src/components/About.js
=======
    const [aboutText, setAboutText] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAboutText = async () => {
            try {
                const response = await axios.get('/api/v1/about/');
                setAboutText(response.data.data[0].text);
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

>>>>>>> Stashed changes:client/src/components/About.js
    return (
        <>
            <div id='about'>
                <img src={about} alt='about-us' id='about-us' />
                <div className='about-txt'>
                    <h1>About us</h1>
                    <p>Scuderia Ferrari, currently competing as Scuderia Ferrari HP,
                        is the racing division of luxury Italian auto manufacturer Ferrari and the racing team
                        that competes in Formula One racing. The team is also known by the nickname
                        "The Prancing Horse", in reference to their logo.
                        It is the oldest surviving and most successful Formula One team, having competed
                        in every world championship since 1950.
                    </p>

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
