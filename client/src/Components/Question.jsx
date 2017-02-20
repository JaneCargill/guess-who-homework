import React from 'react';
import GuessWhoCharacterShuffle from './GuessWhoCharacterShuffle';

class Question extends React.Component {
  answerQuestion() {
    // console.log(GuessWhoCharacter.props.characters)
  }
  render() {
    // console.log(this.answerQuestion())
    return(
     <div>
       <p>{this.props.question}</p>
       <p>{this.props.answer}</p>
      </div>
    )
  }
}

export default Question;