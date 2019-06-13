import React from 'react';
import { Col, Button, FormControl,  FormGroup, Row } from 'react-bootstrap';
import axios from 'axios';



class AddTodo extends React.Component {
    constructor() {
        super();

        this.state = {
            todoName: ""
        }

    }


    
    async addTodofunction() {

        const { todoName } = this.state;
        await axios.post("http://localhost:4000/addTodo", {
            name: todoName
        }).then((res) => {
            console.log(res);

           axios.get("http://localhost:4000/todoArr").then((res) => {
            console.log('res============>>>>',res);
            this.props.updateState(res.data)
                this.setState({
                  todoArr: res.data
                })
              })
                .catch((err) => {
                  console.log(err)
                })
        })
            .catch((err) => {
                console.log(err)
            })
    }


    render() {
        const { todoName } = this.state;
        return (

            <div >

                <Row style={{ height: '100px' }}>
                    <Col lg={12} md={12} sm={12} xs={12}>

                        <h2 className="truncate flex-center-center txt-bold-style" style={{ color: "#f1592a" }}>
                            Add Todo</h2>

                    </Col>


                    <Col lg={12} md={12} sm={12} xs={12} className="flex-center-center">
                        <Col lg={2} md={2} sm={2} xs={2}> </Col>
                        <Col lg={8} md={8} sm={10} xs={12} style={{ height: '100%', padding:"0px"}}>

                            <Col lg={12} md={12} sm={12} xs={12} >

                                <div className="flex-around-center ">
                                    <Col lg={10} md={10} sm={10} xs={10} style={{padding:"0px"}}>
                                        <FormGroup style={{ margin: "0px" }}>
                                            <FormControl
                                                type="text"
                                                name="todoName"
                                                placeholder="write here..."
                                                value={todoName}
                                                onChange={(e) => { this.setState({ [e.target.name]: e.target.value }) }}
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col lg={2} md={2} sm={2} xs={2} className="flex-center-center">
                                        <Button onClick={() => this.addTodofunction()} style={{width:"80px",background:"#3399ff" ,border:"none"}}>Add</Button>
                                    </Col>
                                </div>

                            </Col>

                        </Col>
                        <Col lg={2} md={2} sm={2} xs={2}> </Col>
                    </Col>
                </Row>
            </div>
        )
    }


}

export default AddTodo;
