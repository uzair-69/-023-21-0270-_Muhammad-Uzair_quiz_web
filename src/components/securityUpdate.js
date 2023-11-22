import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import img3 from '../img/image 3.png';
import img2 from '../img/image 2.png';
import prevIconImage from '../img/teenyicons_left-solid.png';
import nextIconImage from '../img/teenyicons_right-solid.png';
import Button from 'react-bootstrap/Button';

export const SecurityUpdate = () => {
    return (
        <>
    
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">
            <h1 style={{ color: 'black' }}>Pinpoint Security,</h1>
            <h1 style={{ color: 'black' }}>ensure the best</h1>
            <h1 style={{ color: 'black' }}>usage for the institutes</h1>
            
    </div>
       < div className="col-md-12 align-items-center justify-content-center ">
        <p style={{ color: 'black' }}>Pinpoint is the fastest tracking and reservation software solution for personal and enterprise vehicles for institutes, offices and companies with live tracking, history recording, estimated arrival time and usage report generation and much more features</p>
          
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
        </>
    );
}