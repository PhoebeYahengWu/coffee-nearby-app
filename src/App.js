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
    location: ""
  };

  componentDidMount() {
    this.searchStore('coffee','New York');
  }

  searchStore = (term,location) => {
    API.search(term,location)
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
    this.searchStore(this.state.term, this.state.location);
  }

  render() {
    return (
      <div className="container h-100">
      <Title />   
      <div className="row h-100 justify-content-center align-items-center">
        <form className="col-10">
        <Search 
                term={this.state.term}
                location={this.state.location}
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
