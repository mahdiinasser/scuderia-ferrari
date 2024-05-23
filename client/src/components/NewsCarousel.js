import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/planes.jpg'
import img2 from '../images/blue_fit.jpg'
import img3 from '../images/podium.jpeg'


function NewsCarousel() {
  return (
    <div id='news' >
    <Carousel id='carousel'>
    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src={img1}
        alt="First slide" 
      />
      <Carousel.Caption>
        <h1>IT'S HAMMER TIME!</h1>
        <p>Lewis HAMILTION to drive for ferrari starting 2025.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h1>FERRARI IN BLUE</h1>
        <p>Scuderia Ferrari reveals new blue livery ahead of Miami GP.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h1>BACK TO THE PODIUM!</h1>
        <p>
          Leclerc steals the third spot in Miami.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default NewsCarousel