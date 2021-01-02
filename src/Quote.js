/*Import the react libary to extend off*/
import React from 'react'
import TweetQuote from './tweetquote.js'

/*The quote class will handle creating a new quote*/
class Quote extends React.Component {
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
      <div id="quote">
        <div id="text">{this.state.quote}</div>
        <div id="author">{this.state.author}</div>
        {/*This is the tweet link - this link explains how to program it: https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview ;*/}
        <TweetQuote quote={this.state.quote} author={this.state.author} />


      </div>
    );
  }

}

export default Quote;
