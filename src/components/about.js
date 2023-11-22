import React from 'react';
import img from '../img//image 4.png';
import { ContactUs } from "./contactUs";

function About() {
    return(
        <>
        <h1 className="mt-4">About Pinpoint</h1>
    <div className=" mt-4 container">
        <div className="row">
        
            <div className="col-md-12">
                
                <img src={img} alt="" style={{ width: '800px', height: '400px' }} />
                <p className="mt-5">Pinpoint is the fastest tracking and reservation software solution for personal and enterprise vehicles for institutes, offices and companies with live tracking, history recording, estimated arrival time and usage report generation and much more features.</p>
                <p className="mt-5">We ensure the best usage for vehicles tracking and reservation system security with advance encryption standards and capability of keeping your assets like car, points much more secure with the live tracking system</p>
            </div>
        </div>
    </div>
    <ContactUs />
        </>
    )
}
export default About;