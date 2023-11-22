import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

export const ContactUs = () => {
    const [userinfo, setUserinfo] = useState({
        email: '',
        contact: '',
        feedback: ''
    });
    function data(){
        console.log(userinfo);
    }
    return (
        <>
         <div className="contact-form">
            <Form>
                <div className="container">
                    <h1>Feedback Form</h1>
                    <div className="row">
                        <div className="col-lg-6 mt-5">
                            <Form.Group controlId="email">
                                
                                <Form.Control value={userinfo.email} onChange={(e) => setUserinfo({...userinfo, email:e.target.value})} type="email" placeholder="Enter email" required />
                            </Form.Group>
                        </div>
                        <div className="col-lg-6 mt-5">
                            <Form.Group controlId="phone">
                                
                                <Form.Control value={userinfo.contact} onChange={(e) => setUserinfo({...userinfo, contact:e.target.value})} type="tel" placeholder="Enter contact" required />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row mt-5 mb-5">
                        <div>
                            <Form.Group controlId="feedback">
                                
                                <Form.Control value={userinfo.feedback} onChange={(e) => setUserinfo({...userinfo, feedback:e.target.value})} as="textarea" rows={4} placeholder="Enter feedback" required />
                            </Form.Group>

                            <Button onClick={data} variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </div>

                </div>
            </Form>
        </div>
        </>
      );
    }