/*This is a react component which will allow our random quotes
machine the ability tweet quotes.  I seperated this funcationality
to make things a bit simpler as I guess thats the idea of React*/

/*import statements*/
import React from 'react'
import './App.css';

class TweetQuote extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      thequote : this.props.quote,
     theauthor: this.props.author
   }
  }

  render(){

    /*We need to make the ref part of the <a> URL
    This explains how to do this: https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview

    Essentially we are going to add the quote and the author to the end of this https://twitter.com/intent/tweet?text=
    But the quote and the author has to be sanitised - all spaces need to replaced with % as per web standards*/

        /*variable to store the url*/
      let url ="https://twitter.com/intent/tweet?text=";



      /*replace whitespace in quote and author with %*/
      let sanitisedQuote = this.state.thequote.replace(/\s/g, "%20");
      let sanitisedAuthor = this.state.theauthor.replace(/\s/g, "%20");

      /*Log the newly sanitised variables for debugging*/
      console.log("----------------------------------------------");
      console.log("sanitised quote: " + sanitisedQuote);
      console.log("sanitised quote: " + sanitisedAuthor);
      console.log("----------------------------------------------");

      /*add the quote and author onto the end of the url into a new variable (not mutating!)*/
      let tweetUrl = url +"'" +sanitisedQuote + " '"+ "%20%20-%20" + sanitisedAuthor;
      console.log("----------------------------------------------");
      console.log("our URL for tweeting will look like this: " + tweetUrl);
      console.log("----------------------------------------------");


    return(
      <a id ="tweet-quote" className="fa fa-twitter fa-lg m-2 p-2 btn btn-large btn-primary"
        href= {tweetUrl}
        target= "_blank"
        data-size="large">

      </a>
    );
  }
}




export default TweetQuote;
