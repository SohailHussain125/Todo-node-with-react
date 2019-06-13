import React from 'react';
import { Col, Form, Button, FormControl, Alert, PanelGroup, Panel, Image, FormGroup ,Row} from 'react-bootstrap';



class SignUp extends React.Component {

    render() {
        return (

            <div >
                <Row>
                    <Col lg={2} md={2} sm={2} xs={2} ></Col>
                    <Col lg={8} md={8} sm={8} xs={8}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                           
                        </Form.Group>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" />
                           
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
  </Button>
                    </Form>;
                    </Col>
                    <Col lg={2} md={2} sm={2} xs={2} ></Col>

                </Row>
            </div>
        )
    }


}

export default SignUp;
