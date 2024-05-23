import React from 'react';
import about from '../images/about-us.png';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const About = () => {
    return (
        <>
            <div id='about' >
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

                    <MDBBtn className='m-1 border-0' size='lg' style={{ backgroundColor: '#131313' }} href='https://www.facebook.com/ScuderiaFerrari'>
                        <MDBIcon fab icon='facebook-f' />
                    </MDBBtn>

                    <MDBBtn className='m-1 border-0' size='lg' style={{ backgroundColor: '#131313' }} href='https://x.com/Scuderiaferrari'>
                        <MDBIcon fab icon='x-twitter' />
                    </MDBBtn>

                    <MDBBtn className='m-1 border-0' size='lg' style={{ backgroundColor: '#131313' }} href='https://www.instagram.com/scuderiaferrari'>
                        <MDBIcon fab icon='instagram' />
                    </MDBBtn>

                    <MDBBtn className='m-1 border-0' size='lg' style={{ backgroundColor: '#131313' }} href='https://www.tiktok.com/@ferrari'>
                        <MDBIcon fab icon='tiktok' />
                    </MDBBtn>

                    <MDBBtn className='m-1 border-0' size='lg' style={{ backgroundColor: '#131313' }} href='https://www.twitch.tv/ferrariesports'>
                        <MDBIcon fab icon='twitch' />
                    </MDBBtn>

                    <MDBBtn className='m-1 border-0' size='lg' style={{ backgroundColor: '#131313' }} href='https://www.linkedin.com/showcase/scuderiaferrari/'>
                        <MDBIcon fab icon='linkedin-in' />
                    </MDBBtn>

                    <MDBBtn className='m-1 border-0' size='lg' style={{ backgroundColor: '#131313' }} href='https://www.youtube.com/user/ferrariworld'>
                        <MDBIcon fab icon='youtube' />
                    </MDBBtn>


                </div>
            </div>


        </>
    )
}

export default About
