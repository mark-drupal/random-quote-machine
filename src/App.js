import React from 'react';
import './App.css';
import Quote from './Quote.js';

/*
 The Quote Component displays just a quote
*/

class FullQuote extends React.Component {

  constructor() {
    super();
    /*Set up the quote and author in the state object*/
  }

  /*This arrow function forces the update*/
  updateQuote = () => {
    /*This essentially forces a refresh of the display which in turn re-renders the Quote component*/
    this.forceUpdate();

    /*let the console know*/
    console.log(" ");
    console.log("-------------------------");
    console.log("A New quote has been requested by the user");
    console.log("-------------------------")
    console.log(" ");
  }

  render() {
    return (
      <div>
        {/*The brings in a new quote component from ./Quote.js*/}
        <Quote />
        {/*This is the button that get a new quote calling this.updateQuote*/}
        <button
          id="new-quote" onClick={this.updateQuote}>
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
        <FullQuote />
      </header>
    </div>
  );
}

export default App;
