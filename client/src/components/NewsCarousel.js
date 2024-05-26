import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/planes.jpg'
import img2 from '../images/blue_fit.jpg'
import img3 from '../images/podium.jpeg'



function NewsCarousel() {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchNews = async () => {
          try {
              const response = await axios.get('/api/v1/news');
              setNews(response.data.data);
              setLoading(false);
          } catch (err) {
              setError('Error fetching specs');
              setLoading(false);
          }
      };

      fetchNews();
  }, []);

  if (loading) {
      return <div>Loading...</div>;
  }

  if (error) {
      return <div>{error}</div>;
  }

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
        <h1>{news[0].title}</h1>
        <p>{news[0].caption}</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h1>{news[1].title}</h1>
        <p>{news[1].caption}</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h1>{news[2].title}</h1>
        <p>{news[2].caption}</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default NewsCarousel