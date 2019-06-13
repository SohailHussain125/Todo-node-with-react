import React from 'react';
import { Col, Button, Row, FormControl, FormGroup, } from 'react-bootstrap';
import axios from 'axios';



class ShowTodo extends React.Component {
    constructor() {
        super();

        this.state = {
            todoArr: [],
            updateState: 0,
            updateTodoName: "",
        }

        this.updateTodo = this.updateTodo.bind(this);
        this.activeUpdateTodo = this.activeUpdateTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);

    }

    componentWillReceiveProps(nextProps) {

        this.setState({
            todoArr: nextProps.todoArr
        })

    }

    activeUpdateTodo(value) {
        console.log('run---->',value)
        const { updateTodoName, updateState } = this.state;
        this.setState({
            updateState: value._id,
            updateTodoName: value.name
        })
        
    }

    updateTodo(){
        const { updateTodoName, updateState } = this.state;

         axios.put(`http://localhost:4000/api/updateTodo/${updateState}`,{ name:updateTodoName})
        .then((res)=>{
            console.log(res)
            axios.get("http://localhost:4000/todoArr").then((res) => {
            console.log('res============>>>>',res);
            this.props.updateState(res.data)
                this.setState({
                  todoArr: res.data,
                  updateState:0
                })
              })
                .catch((err) => {
                  console.log(err)
                })
        })
        .catch((err)=>{

        })
    }


    deleteTodo(value){
  axios.delete(`http://localhost:4000/api/deleteTodo/${value._id}`)
  .then((res)=>{
      console.log(res.data)
    axios.get("http://localhost:4000/todoArr").then((res) => {
        console.log('res============>>>>',res);
        this.props.updateState(res.data)
            this.setState({
              todoArr: res.data,
            })
          })
            .catch((err) => {
              console.log(err)
            })

  })
  .catch((err)=>{

  })

    }


    render() {
        const { todoArr, updateState, updateTodoName } = this.state;
        return (

            <div >

                <Row>
                    <Col lg={2} md={2} sm={2} xs={2} ></Col>
                    <Col lg={8} md={8} sm={8} xs={8} className="todo-list-col ">
                        <div className="flex-center-center " style={{ flexDirection: 'column' }}>
                            {todoArr.length && todoArr.map((value, i) => {
                                return (
                                    <Col lg={12} md={12} sm={12} xs={12} style={{ padding: '10px' }}>
                                        {updateState == value._id ?
                                            <div className="flex-around-center "   key={value._id} >
                                                <Col lg={10} md={10} sm={10} xs={10} style={{ padding: "0px" }}>
                                                    <FormGroup style={{ margin: "0px" }}>
                                                        <FormControl
                                                            type="text"
                                                            name="updateTodoName"
                                                            placeholder="write here..."
                                                            value={updateTodoName}
                                                            onChange={(e) => { this.setState({ [e.target.name]: e.target.value }) }}
                                                        />
                                                    </FormGroup>
                                                </Col>

                                                <Col lg={2} md={2} sm={2} xs={2} className="flex-center-center">
                                                    <Button  style={{ width: "80px", background: "#ffe4e1", border: "none",color:'#ff7373' }} onClick={this.updateTodo}>Update</Button>
                                                </Col>
                                            </div>
                                            :
                                            <div className="todo-list flex-start-center" key={value._id}>
                                                <Col lg={8} md={8} sm={8} xs={8} className="txt-style truncate" style={{ fontSize: "16px" }}> {value.name}</Col>
                                                <Col lg={3} md={3} sm={3} xs={3} >
                                                    <div className="flex-evenly-center" >
                                                        <Button className="btn-edit" onClick={() => this.activeUpdateTodo(value)}>Edit</Button>
                                                        <Button className="btn-del" onClick={() => this.deleteTodo(value)}>Delete</Button>
                                                    </div>
                                                </Col>

                                            </div>
                                        }


                                    </Col>
                                )

                            }).reverse()}
                        </div>
                    </Col>
                    <Col lg={2} md={2} sm={2} xs={2} ></Col>

                </Row>
            </div>
        )
    }


}

export default ShowTodo;
