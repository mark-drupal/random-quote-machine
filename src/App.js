import React from 'react';
import './App.css';
import Quote from './Quote.js';

/*
 The Quote Component displays just a quote
*/

class FullQuote extends React.Component {

  constructor(props) {
    super(props);
    /*Set up the quote and author in the state object*/
  }



  render() {
    return (
      <div>
        {/*The brings in a new quote component from ./Quote.js*/}
        <Quote />
      </div>
    );
  }
}

function App() {
  return (
    <div id = "quote-box" className="container-xl flex-column align-self-center" >
      <FullQuote />
    </div>
  );
}

export default App;
