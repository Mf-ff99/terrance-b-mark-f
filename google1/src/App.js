import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import Searchbox from './components/Searchbox';
import SearchResults from './components/SearchResults';


class App extends React.Component{
  constructor(props){ 
    super(props)
    this.state = {
      books: [],
      error: null,
      loading: false,
      q: '',
      filter: '',
      printType: '',
      key: 'AIzaSyA9ET2UqWKLWV0Fh3MSXLtCeZtL3PerURI',
    }
  }

  handleFilterPrintType = (e) => {
    this.setState({
      printType: e
      })
  }

  handleSearchText = (e) => {
    this.setState({
      q: e
      })
  }

  handleFilterBookType = (e) => {
    this.setState({
      filter: e
      })
  }

  handleApiFetch = (url) => {
    fetch(url) 
      .then(res => {
        if(res.ok) {
          return res.json()
        }
        throw new Error(res.status)
      })
      .then(data => {
          //console.log(data)

          const bookArr = data.items.map(book=>{
            const {title,authors,description,imageLinks} = book.volumeInfo
            const {saleability, retailPrice} = book.saleInfo
            return{ 
              title: title,
              author:authors,
              description: description,
              url: imageLinks.thumbnail,
              saleability:saleability,
              retailPrice:retailPrice

            }
            
          })
          console.log(bookArr);
          this.setState({
            books:bookArr,
            error: null,
          })
      })
      .catch(error => {
        console.log(error.message)
      })
    }

  handleFormSubmit = (e) => {
    e.preventDefault()
    let url = `https://www.googleapis.com/books/v1/volumes?filter=${this.state.filter}&printType=${this.state.printType}&q=${this.state.q}`
    this.handleApiFetch(url)
    console.log(url)
  }



//on form submit call handleApiFetch
//return the results to SearchResults.js





  render(){
    let result = this.state.books
    const books = result.map(book=>{
      return <SearchResults 
      title={book.title}
      author={book.authors}
      description={book.description}
      url= {book.url}
      saleability={book.saleability}
      retailPrice={book.retailPrice}
      
      />

    }
    
      )
      console.log(books)


  return (
    <div className="App">
      <Header />
      <Searchbox props={this.state} handleSubmit={this.handleFormSubmit} handleFilterByType={this.handleFilterBookType}  handleSearchText={this.handleSearchText} handleSearch={this.handleFilterPrintType}/>
  <div className='Results'>{books}</div>
    </div>

   )
  }
}

export default App;
