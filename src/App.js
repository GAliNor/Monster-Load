import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/Card-list/Card-list.component';
import { SearchBox } from './components/Search-box/search-box.component';
import { ButtonsList } from './components/Button-list/Buttons-list.component';

class App extends Component {

  constructor() {

    super();

    this.state = {
      monsters : [],
      characters : ['Robots', 'Monsters', 'Robot Heads', 'Cats', 'Human Technicien'],
      chosenCharacter : {id : 1, type : 'Robots'},
      searchField : ''
    }

    //this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({searchField : e.target.value})
  }

  handleChangeCharacter = (e) => { 
    if(e.target.id > 0 && e.target.id <= 5 && this.state.characters[e.target.id - 1] === e.target.value)
      this.setState({chosenCharacter : {id: e.target.id, type : e.target.value}})
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters : users}))
      .catch(error => console.log(error));
  }
  
  render() {

    const { monsters, searchField } = this.state;
    var monstersFiltered = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Robots load</h1>
        <SearchBox
          placeholder="Search Robot"
          handleChange={this.handleChange}
        />
        <ButtonsList 
          characters={this.state.characters}
          handleClick={this.handleChangeCharacter}
        />
        <CardList 
          monsters={monstersFiltered}
          chosenCharacter={this.state.chosenCharacter}
        />
      </div>
    );}
  }

export default App;