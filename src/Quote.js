/*Import the react libary to extend off*/
import React from 'react'
import TweetQuote from './tweetquote.js'
import './App.css';

/*The quote class will handle creating a new quote*/
class Quote extends React.Component {
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

    render (){
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

    /*Transfer the selected quote into the relevant states */
    this.state ={
      author: selectedQuote.author,
      quote: selectedQuote.quote
    }
    console.log("------------------------------------------");
    console.log("----       New Quote Seletected       ----");
    console.log("------------------------------------------");
    console.log("----    " + this.state.quote);
    console.log("------------------------------------------");
    console.log("----    " + this.state.author);
    console.log("------------------------------------------");



    /*return the selected quote*/
    return (
      <div id="quote-box">
        <div id="text" className="col blockquote font-weight-bold lead d-flex justify-content-center">{this.state.quote}</div>
        <div id="author" className="col blockquote-footer font-italic  d-flex justify-content-center">{this.state.author}</div>
        {/*This is the tweet link - this link explains how to program it: https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview ;*/}
        <TweetQuote className="col " quote={this.state.quote} author={this.state.author} />
        {/*This is the button that get a new quote calling this.updateQuote*/}
        <button
          id="new-quote"
          className="btn btn-outline-primary btn-large .spinner-border "
          onClick={this.updateQuote}>
          New quote
        </button>
      </div>
    );
  }

}

export default Quote;
