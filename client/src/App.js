import React, { Component } from 'react'
import './App.css';
import axios from 'axios';
import User from './Components/user/User';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount = () => {
    axios
      .get('https://run.mocky.io/v3/4427f590-f937-4b12-984d-48a3395d6f0b')
      .then(res =>
        this.setState({
          data: res.data.members
        })
      )
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { data } = this.state
    return (
      <div className="App bg-dark" style={{height:'100vh'}}>
        <User users={data} />
      </div>
    );
  }
}