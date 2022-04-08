import React from 'react';
import Rand from './Rand';
import Pound from './Pound';
import Euro from './Euro';

class Currency extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currency: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleConvert = this.handleConvert.bind(this);
  }

  // handles the submit event
  handleSubmit(e) {
    e.preventDefault();
    let dollars = parseInt(document.getElementById('inputDollars').value);

    // if dollars is not a number, it will run the error function
    // if dollars is a fucntion, it will run the convert function
    if (isNaN(dollars)) {
      this.handleError();
    } else {
      this.handleConvert();
    }
  }

  // when the user enters a number, the state of the parent is updated and sent to the child as a prop
  handleConvert() {
    let dollars = parseInt(document.getElementById('inputDollars').value);

    this.setState({ currency: dollars });
  }

  // if the user doenst enter a number, the error message will appear
  handleError() {
    this.setState({ currency: null });
  }

  render() {
    return (
      <>
        {/* input section */}
        <div className="input">
          <p>Enter your ammount in Dollars</p>
          <form onSubmit={this.handleSubmit}>
            <input type="number" id="inputDollars" />

            <button>Convert Currency</button>
          </form>
        </div>

        {/* output section */}
        <div id="output">
          {this.state.currency === null ? (
            <h3 className="errorMessage">Please enter a valid Number!</h3>
          ) : (
            <>
              <p>Here is the converted amounts:</p>
              <Rand dollars={this.state.currency} />
              <Pound dollars={this.state.currency} />
              <Euro dollars={this.state.currency} />
            </>
          )}
        </div>
      </>
    );
  }
}

export default Currency;
