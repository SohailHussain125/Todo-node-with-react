import React from 'react';
import { Col, Form, Button, FormControl,FormLabel, FormGroup,FormCheck ,Row} from 'react-bootstrap';



class SignIn extends React.Component {

    render() {
        return (

            <div >

                <Row>
                    <Col lg={2} md={2} sm={2} xs={2} ></Col>
                    <Col lg={8} md={8} sm={8} xs={8}>
                        <Form>
                            <FormGroup controlId="formBasicEmail">
                                <FormLabel>Email address</FormLabel>
                                <FormControl type="email" placeholder="Enter email" />
                               
                            </FormGroup>

                            <FormGroup controlId="formBasicPassword">
                                <FormLabel>Password</FormLabel>
                                <FormControl type="password" placeholder="Password" />
                            </FormGroup>
                            <FormGroup controlId="formBasicChecbox">
                                <FormCheck type="checkbox" label="Check me out" />
                            </FormGroup>
                            <Button variant="primary" type="submit">
                                Submit
  </Button>
                        </Form>
                    </Col>
                    <Col lg={2} md={2} sm={2} xs={2} ></Col>

                </Row>
            </div>
        )
    }


}

export default SignIn;
