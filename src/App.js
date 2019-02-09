import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import './GetChuckJoke.css'

import List from './Components/List';
import Header from './Components/Header';
import GetChuckJoke from './Components/GetChuckJoke';
import CreateJoke from './Components/CreateJoke'



class App extends Component {

  constructor() {
    super()

    this.state = {
      list: [],
      chuckJoke: [],
      editInput: '',
      
    }

    //this.handleInput = this.handleInput.bind(this)
    this.handleAddToList = this.handleAddToList.bind(this)
    this.handleChuckJoke = this.handleChuckJoke.bind(this)
    this.handleDeleteListItem = this.handleDeleteListItem.bind(this)
    // this.handleGetNames = this.handleGetNames.bind(this)

  }

  componentWillMount() {
    axios.get('/api/jokes/list').then( (res) => {
      this.setState({
        list: res.data
      })
    })
  }

  handleChuckJoke() {
    axios.get('http://api.icndb.com/jokes/random').then(results => {
      this.setState({
        chuckJoke: results.data.value.joke
      })
    })
  }


  handleAddToList(value) {

    let body = { joke: value }

    axios.post('/api/jokes', body).then((res) => {
      this.setState({
        list: res.data,
      })
    })

  }

  handleDeleteListItem(index) {
    axios.delete(`/api/jokes/${index}`).then((res) => {
      this.setState({
        list: res.data
      })
    })
  }

  // handleEditInput() {
  //   axios.put().then()
  // }


  // dummy function
  // handleGetNames() {
  //   axios.get('/get/names').then( ( response ) => {
  //     this.setState({
  //       list: response.data
  //     })
  //   })
  // }

  render() {

    return (

      <div className="App">

        <Header></Header>

        <div className="autoJoke">

          {this.state.chuckJoke}

          <GetChuckJoke action={() => this.handleChuckJoke()}></GetChuckJoke>

        </div>

        <h1>Add Joke: </h1>

        <CreateJoke onJokeAdd={(input) => this.handleAddToList(input)} />

        {/* <input onChange={ (e) => this.handleInput(e.target.value)}></input> */}

        <List
          jokes={this.state.list}
          deleteJoke={this.handleDeleteListItem}
        />

      </div>

    );
  }
}

export default App;
