import React from 'react';
import logo from './logo.svg';
import './App.css';


/*
 The Quote Component displays just a quote
*/

class Quote extends React.Component {

  /*This function selects a random quote*/
  updateQuote = () => {

    /*This array contains our quotes*/
    let quotes = [
      {
        "quote":"over the line",
        "author":"walter"
      },
      {
        "quote":"she probably kid napped herself",
        "author":"The Dude"
      },
      {
        "quote":"I am staying, I'm drinking my coffee",
        "author":"Walter"
      }
    ];

    /*select a random quote*/
    let selectedQuote = quotes[Math.floor(Math.random()*quotes.length)];
    /*update the state of the quote and author*/
    this.setState({quote:selectedQuote.quote});
    this.setState({author:selectedQuote.author});
  }

  constructor() {
    super();
    /*Set up the quote and author in the state object*/
    this.state = {
        quote: this.updateQuote.quote,
        author: this.updateQuote.author
      };
    }

    render() {
      return (
        <div>
          {/*As per the requirements for the use case this tage is the quote text*/}
          <p id="quote-text">{this.state.quote}</p>
          {/*As per the requirements for the use case this tag for the author*/}
          <p id="quote-author">{this.state.author}</p>
          {/*This is the button which brings back a new quote*/}
          <button

            id="new-quote"
            
            onClick={this.updateQuote}>
            New quote

          </button>

      </div>
    );
  }

}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Quote />
      </header>
    </div>
  );
}

export default App;
