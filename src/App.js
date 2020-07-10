import React, { Component } from 'react';
import Title from './components/Title/Title';
import Search from './components/Search/Search';
import Result from './components/Result/Result';
import API from './utils/API';
import './App.css';

class App extends Component {
  state = {
    result: [],
    search: ""
  };

  componentDidMount() {
    this.searchStore('coffee','40.7128','74.0060');
  }

  searchStore = (query,latitude,longitude) => {
    API.search(query,latitude,longitude)
      .then(res => console.log(res))
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState ({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchNews(this.state.search);
  }

  render() {
    return (
      <div className="container h-100">
      <Title />   
      <div className="row h-100 justify-content-center align-items-center">
        <form className="col-10">
        <Search value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}/>
        <Result 
          result = {this.state.result}
        />
        </form>
      </div>
      </div>
    )
  }
}

export default App;
