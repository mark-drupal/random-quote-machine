import React from 'react';
import logo from './logo.svg';
import './App.css';


/*
 The Quote Component displays just a quote
*/

class Quote extends React.Component {
  constructor() {
    super();


    }


  render() {
    return (
      <div>
        <p id="quote-text">test</p>
        <p id="quote-author">author</p>
        <button
          id="new-quote"
          onClick=""
          >
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
