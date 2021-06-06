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
        "quote":"If you can dream it, you can achieve it.",
        "author":"Zig Ziglar"
      },
      {
        "quote":"We become what we think about",
        "author":"Earl Nightingale"
      },
      {
        "quote":"Change your thoughts and you change the world",
        "author":"Norman Vincent Peal"
      },
      {
        "quote":"The most common way people give up their power is by thinking they don't have any",
        "author":"Alice Walker"
      },
      {
        "quote":"You carn't fall if you don't climb.  But there's no joy in living your whole life on the ground",
        "author":"Uknown"
      },
      {
        "quote":"Winning isn't everything, but wanting to win is",
        "author":"Vince Lombardi"
      },
      {
        "quote":"If the wind will not serve, take to the oars",
        "author":"Latin Proverb - before sailing was invented!?"
      },
      {
        "quote":"There is only one way to avoid criticism: do nothing, say nothing and be nothing.",
        "author":"Aristotle"
      },
      {
        "quote": "We can easily forgive a child is who afraid of the dark; the real tragedy of life is when men are afraid of the light",
        "author":"Plato"
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
