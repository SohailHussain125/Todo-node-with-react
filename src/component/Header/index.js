import React from 'react';
import { Col,Row ,Image} from 'react-bootstrap';
import logo from '../../assets/images/download.png'


class Header extends React.Component {

    render() {
        return (

            <div >

                <Row>
                <Col lg={4} md={4} sm={4} xs={4} ></Col>

                    <Col lg={4} md={4} sm={4} xs={4} >
                <div className="flex-center-center"> 
                <Image src={logo} roundedCircle />
                    </div>                      
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4} >


                    </Col>
                
                </Row>
            </div>
        )
    }


}

export default Header;
