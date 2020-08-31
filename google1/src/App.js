import React from 'react';
import Header from './components/Header';
import './App.css';
import Searchbox from './components/Searchbox';


class App extends React.Component{
  constructor(props){ 
    super(props)
    this.state = {
      books: [],
      error: null,
      params:{
        
       }

    }
  }
  render(){
  return (
    <div className="App">
      <Header />
      <Searchbox />
    </div>

  )
  }
}

export default App;
