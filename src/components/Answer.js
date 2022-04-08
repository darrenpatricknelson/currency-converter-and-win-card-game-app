import React from 'react';
import Button from 'react-bootstrap/Button';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    // Eeny, Meeny, Miny, Moe
    this.message = props.message;

    // The color of the hover state
    this.variant = props.variant;

    // The answer (winner or loser)
    this.value = props.value;

    // To flipw the card
    this.state = { isFlipped: props.state };
  }

  render() {
    return (
      <>
        <Button className="buttonCards" variant={this.variant}>
          <div className="card">
            {this.state.isFlipped ? (
              <div id="back" className="card__face">
                {this.value}
              </div>
            ) : (
              <div id="front" className="card__face">
                {this.message}
              </div>
            )}
          </div>
        </Button>
      </>
    );
  }
}

// this was a failed attempt at trying to allow the card to turn

// function Answer(props) {
//   let message = props.message;
//   let variant = props.variant;
//   let value = props.value;
//   let state = props.state;

//   return (
//     <>
//       <Button className="buttonCards" variant={variant}>
//         <div className="card">
//           {state ? (
//             <div id="back" className="card__face">
//               {value}
//             </div>
//           ) : (
//             <div id="front" className="card__face">
//               {message}
//             </div>
//           )}
//         </div>
//       </Button>
//     </>
//   );
// }

export default Answer;
