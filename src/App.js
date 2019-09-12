import React, { Component } from 'react';

import './App.css';
import Logo1  from './AQuitPlace.png';

import Logo from './BridBox.png';
import MovieList from './MovieList';

import Logo3 from './GameOfThrone.png';
import Logo4 from './EscapeRom.jpg';
import logo5 from './ToyStory.jpg';
const tablist = [{ id: 'inception', rating: '5', image: Logo , title: 'Brid Box - 2018 ' }, { id: 'inception', rating: '1', image: Logo1, title: ' A Quit Place' },
{ id: 'inception', rating: '4', image: Logo3 , title: ' Game Of Throne - 2017 ' },
 { id: 'inception', rating: '4', image: Logo4 , title: ' Escape Rom - 2019 ' },
  { id: 'inception', rating: '3', image: logo5 , title: ' Toy Story - 2019 ' }]
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        isLoading: true,
        movies: tablist
       }
    }
     componentDidMount(){
      setTimeout(()=>this.setState({isLoading: false}), 3000)
        }
        
       
       
     
    render() { 
      
      return (  
        <div className='App'>
          <MovieList loading={this.state.isLoading} movies={tablist} />
          
          
        </div>
      );
    }
  }
   
  export default App;
               
               