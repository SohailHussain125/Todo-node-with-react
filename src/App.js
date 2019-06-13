import React from 'react';
import SignIn from './component/Signin';
import SignUp from './component/signUp';
import AddTodo from './component/AddTodo';
import ShowTodo from './component/showTodo';
import Header from './component/Header';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todoArr: []
    }

  }

  async componentDidMount() {
    const { todoArr } = this.state;
    await axios.get("http://localhost:4000/todoArr").then((res) => {
      this.setState({
        todoArr: res.data
      })
    })
      .catch((err) => {
        console.log(err)
      })
  }


updateState = (data)=>{
  this.setState({todoArr:data})
}

  render() {
    const { todoArr } = this.state;

    return (
      <div>
        <Header />
        <AddTodo updateState={this.updateState} />
        <ShowTodo
          todoArr={todoArr}
          updateState={this.updateState} 
        />
      </div>

    )

  }


}

export default App;
