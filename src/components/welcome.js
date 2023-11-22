import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import img3 from '../img/image 3.png';
import img2 from '../img/image 2.png';
import prevIconImage from '../img/teenyicons_left-solid.png';
import nextIconImage from '../img/teenyicons_right-solid.png';
import Button from 'react-bootstrap/Button';

import Statistics from "./statistics";
import  {SecurityUpdate}  from "./securityUpdate";

function welcome() {
    return (
        <>
        <Carousel   fade
                prevIcon={<img src={prevIconImage} alt="prevIcon" />}
                nextIcon={<img src={nextIconImage} alt="nextIcon" />}>
            
      <Carousel.Item>
        <img src={img3} alt="First slide" style={{ width: '800px', height: '400px' }} />
        {/* <ExampleCarouselImage text="First slide" /> */}
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt="First slide" style={{ width: '800px', height: '400px' }} />
      </Carousel.Item>
    </Carousel>
    
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">
            <h1 style={{ color: 'black' }}>The Fast Pinpoint</h1>
            <h1 style={{ color: 'red' }}>Get Started -></h1>
            <h1 style={{ color: 'black' }}>Tracking & Reservation.</h1>
            <p style={{ color: 'black' }}>Pinpoint is the fastest tracking and reservation software solution for personal and enterprise vehicles for institutes, offices and companies with live tracking, history recording, estimated arrival time and usage report generation and much more features</p>
            </div>
            <div className="col-md-6">
            <Button
      style={{
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '200px', // Set border radius for rounding
        fontSize: '20px', // Set font size for making it big
        padding: '15px 30px', // Adjust padding for making it big
      }}
    >
        Get Started
    </Button>
            </div>
        </div>
    </div>
    <Statistics />
      <SecurityUpdate />
        </>
    );
}
export default welcome;