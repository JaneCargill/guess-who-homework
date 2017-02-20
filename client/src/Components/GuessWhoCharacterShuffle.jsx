  import React from 'react';
  import GuessWhoCharacter from './GuessWhoCharacter';


  class GuessWhoCharacterShuffle extends React.Component{


    // getRandomCharacter() {
    //   let guessWho = this.props.characters.slice();
    //   for (var i = guessWho.length - 1; i > 0; i--) {
    //           var j = Math.floor(Math.random() * (i + 1));
    //           var temp = guessWho[i];
    //           guessWho[i] = guessWho[j];
    //           guessWho[j] = temp;
    //       }

    //       return guessWho[0];
    // }


    render() {
      return (
        <div className='answerDiv'>
        
        </div>
        )
    }
  }
  // {<GuessWhoCharacter guessWhoCharacter={this.getRandomCharacter()} guessWho={this.getRandomCharacter().name}/>}
export default GuessWhoCharacterShuffle;