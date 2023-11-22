import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
export const ContactUs = () => {
    return (
        <>
          <h2 className='mt=5'>Feedack Form</h2>
        <Form>
          <Row>
            <Col className='mt-5'>
              <Form.Control placeholder="First name" />
            </Col>
            <Col className='mt-5'>
              <Form.Control placeholder="Last name" />
            </Col>
            <Form>
      <Form.Group className="mt-4" controlId="formGroupEmail">

        <Form.Control type="email" placeholder="Enter email" style={{ height: '200px' }} />
      </Form.Group>
    </Form>
          </Row>
        </Form>
        <Button type="submit">Submit form</Button>
        </>
      );
    }