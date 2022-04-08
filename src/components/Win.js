import React from 'react';
import Answer from './Answer';
import '../App.css';

const answers = {
  Winner: 'Congragulations, you have chosen correctly!',
  Loser: "I'm sorry, it seems you've chosen incorrectly!"
};

class Win extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: Object.keys(answers),
      values: Object.values(answers),
      index: 0,
      isFlipped: false,
      flipScore: true,
      userHasPlayed: 0,
      userHasWon: 0,
      userHasLost: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleScoreUpdate = this.handleScoreUpdate.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
    this.handleEndGame = this.handleEndGame.bind(this);
    this.handleFlipScore = this.handleFlipScore.bind(this);
    this.handleNewIndex = this.handleNewIndex.bind(this);
  }

  // This function generates a random number bewtween 0 and 10
  // If the number is divisible by 3, then the newIndex variable is set to 0 and the user will win the game no matter what card they pick
  // alternatively, if the number is not divisible by 3, the newIndex variable is set to 1 and the user has no chance of winning the game
  handleNewIndex() {
    let randomNumber = Math.floor(Math.random() * 10);
    let newIndex;

    if (randomNumber % 3 === 0) {
      newIndex = 0;
    } else {
      newIndex = 1;
    }

    // Basically, the user only has a 3 out 10 chance of winning this game.
    // It's rigged, I know!

    // The newIndex varaible is used to select the index of the values array of the answers object
    this.setState({
      index: newIndex
    });
  }

  // This function handles the click event when the user selects a card
  // When the user clicks on the card, the isFlipped state is set to true, this will be sent as a prop to the child component, flipping the card and revealing the answer
  handleClick() {
    this.setState({
      isFlipped: !this.state.isFlipped
    });

    // then this function will run
    this.handleScoreUpdate();

    // and a second later the score card will be revealed, allowing the user to see their score and either play again or quit
    setTimeout(() => {
      this.handleFlipScore();
    }, 1000);
  }

  // This function sets the flipScore state to it's opposite and that will reveal the score card
  handleFlipScore() {
    this.setState({
      flipScore: !this.state.flipScore
    });
  }

  // This fucntion updates all the states awhich will reveal the users score
  // How many times he has play, won and lost
  handleScoreUpdate() {
    this.setState({
      userHasPlayed: this.state.userHasPlayed + 1
    });

    if (this.state.index === 0) {
      this.setState({
        userHasWon: this.state.userHasWon + 1
      });
    } else {
      this.setState({
        userHasLost: this.state.userHasLost + 1
      });
    }
  }

  // This funtion generates a new random index and flips the score card over
  // Allowing the user to play again
  handleNewGame() {
    this.handleNewIndex();

    this.setState({
      flipScore: !this.state.flipScore
    });
  }

  // This function clears the score of the user
  // Allowing them to either start a new game or stop playing entirely
  handleEndGame() {
    this.setState({
      userHasPlayed: 0,
      userHasWon: 0,
      userHasLost: 0
    });
  }

  // set the user is playing state to oppos

  render() {
    return (
      <>
        <h3 id="heading">Please select a card...</h3>
        {/* Children commponents */}
        <div className="componentContainer" onClick={this.handleClick}>
          <Answer
            state={this.state.isFlipped}
            value={this.state.values[this.state.index]}
            message="Eeny"
            variant="outline-primary"
          />
        </div>
        <div className="componentContainer" onClick={this.handleClick}>
          <Answer
            state={this.state.isFlipped}
            value={this.state.values[this.state.index]}
            message="Meeny"
            variant="outline-secondary"
          />
        </div>
        <div className="componentContainer" onClick={this.handleClick}>
          <Answer
            state={this.state.isFlipped}
            value={this.state.values[this.state.index]}
            message="Miny"
            variant="outline-success"
          />
        </div>
        <div className="componentContainer" onClick={this.handleClick}>
          <Answer
            state={this.state.isFlipped}
            value={this.state.values[this.state.index]}
            message="Moe"
            variant="outline-warning"
          />
        </div>

        {/* Score card */}
        {/* This card will only be revealed when the flipScore state is set to true */}
        {this.state.flipScore ? (
          <div className="overlay">
            <div className="overlayCenter">
              <h1>Win! card game</h1>

              {/* if the userHasPalyed state is set to 0, a play new game message will show, otherwise the result of the previous attempt will show */}
              {this.state.userHasPlayed === 0 ? (
                <p>Play a new game</p>
              ) : (
                <>
                  <h3>{this.state.keys[this.state.index]}</h3>
                  <p>{this.state.values[this.state.index]}</p>
                </>
              )}
              <ul>
                <li>Played: {this.state.userHasPlayed} </li>
                <li>Won: {this.state.userHasWon} </li>
                <li>Lost: {this.state.userHasLost} </li>
              </ul>

              <button className="playAgain" onClick={this.handleNewGame}>
                Play again
              </button>
              <button className="quit" onClick={this.handleEndGame}>
                Quit
              </button>
            </div>
          </div>
        ) : (
          ''
        )}
      </>
    );
  }
}

export default Win;

// Decided to go with 4 cards for the "Eeny, Meeny, Miny, Moe" theme

// Hi Moderator
// I had the isFlipped state passed down as a prop to the child component
// In the child component, I used this state to either display the front of the card or the back (essentially flipping it on click)
// And although this worked innitially, after updating my parent component, for some reason the child component did not want to work as it did before.
// I've done some research and it turns out the the constructor only constructs the child component and wont re-construct it when the parent component updates it's state.
// Even though, I know what the problem is, I'm not able to solve it. I'm happy with the rest of my code and that's why I have submitted however this issue is bothering me.
// I tried creating the child component as I did the children component of the currency converter app
// But this proved incorrect because the children of the currency converter were seperate components where as this one is a shared component

// Any tips and tricks or a possible solution to the issue? I would really appreciate the help
