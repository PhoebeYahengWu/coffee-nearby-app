import React, { Component } from 'react';
import Title from './components/Title/Title';
import Search from './components/Search/Search';
import Result from './components/Result/Result';
import API from './utils/API'
import './App.css';

class App extends Component {
  state = {
    result: [],
    term: "",
    latitude: "",
    longitude: ""
  };

  componentDidMount() {
    this.searchStore('coffee',40,73);
  }

  searchStore = (term,latitude,longitude) => {
    API.search(term,latitude,longitude)
      .then(res => this.setState({ result: res.data.businesses })) 
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
    this.searchStore(this.state.term, this.state.latitude,this.state.longitude);
  }

  render() {
    return (
      <div className="container h-100">
      <Title />   
      <div className="row h-100 justify-content-center align-items-center">
        <form className="col-10">
        <Search 
                term={this.state.term}
                latitude={this.state.latitude}
                longitude={this.state.longitude}
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
