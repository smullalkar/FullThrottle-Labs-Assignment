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
      .get('https://run.mocky.io/v3/fe1b2cd7-9fe2-4a27-accf-922761076aab')
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
        <h1 className='p-5 text-warning text-center font-weight-bold'>User Watcher   <iframe src="https://giphy.com/embed/9rArsNmg7T4sU215WG" width="50" height="50" frameBorder="0" className="giphy-embed" allowFullScreen style={{marginBottom:'-10px'}}></iframe></h1>
        <User users={data} />
      </div>
    );
  }
}