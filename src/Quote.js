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
      <div id="quote-box" className="container-fluid d-flex flex-column align-self-center mt-5 text-center">
      {/*This is the tweet link - this link explains how to program it: https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview ;*/}



  `       <div className="d-flex flex-column border rounded shadow bg-secondary m5 p5">
             <div className=" d-flex flex-column bg-light border rounded align-items-center">
              <div className=" d-flex flex-row">
                <i class="m-2 p-2 fa fa-quote-left fa-1x fa-pull-right align-self-start"></i>
                <div id="text" className="align-self-center mx-auto blockquote text-center font-weight-bold lead m-2 p-2">
                  {this.state.quote}</div>
                  <i class="m-2 p-2 fa fa-quote-right fa-1x fa-pull-left align-self-end"></i>
              </div>
              <div id="author" className="blockquote-footer font-italic  m-4 p-4"
                >{this.state.author}</div>
            </div>
             <div className="d-flex flex-column ">
               <div className="col align-self-end">
                <TweetQuote
                   className=""
                   quote={this.state.quote}
                   author={this.state.author} />
                   {/*This is the button that get a new quote calling this.updateQuote*/}
                </div>
              <div className="col align-self-start">
                <button
                   id="new-quote"
                   className="m-2 p-2 btn btn-large btn-primary align-self-center align-content-center"
                   onClick={this.updateQuote}>
                   Get a new quote
                 </button>
                </div>
             </div>
          </div>

      </div>
    );
  }

}

export default Quote;
