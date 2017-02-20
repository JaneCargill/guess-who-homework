import React from 'react';
import PeopleList from '../Components/PeopleList';
import QuestionList from '../Components/QuestionList';
import Question from '../Components/Question';
import GuessWhoCharacterShuffle from '../Components/GuessWhoCharacterShuffle';
import GuessWhoCharacter from '../Components/GuessWhoCharacter';

class GameContainer extends React.Component{
  constructor() {
    super()
    this.state = {people: [{name: 'PeterPan', tail: false, hair: true, clothes: true, hat: true, bow: false, image: '../../images/peterpan.png'}, {name: 'Nemo', tail: true, hair: false, clothes: false, hat: false, bow: false, image: '../../images/nemo.png'}, {name: 'Minnie', tail: true, hair: false, clothes: true, hat: false, bow: true, image: '../../images/Minnie.png'}, {name: 'Donald', tail: true, hair: false, clothes: true, hat: true, bow: true, image: '../../images/Donald_Duck.png'}, {name: 'Dumbo', tail: true, hair: true, clothes: false, hat: true, bow: false, image: '../../images/Dumbo.png'}, {name: 'Olaf', tail: false, hair: false, clothes: false, hat: false, bow: false, image: '../../images/Olaf.png'}, {name: 'Eeyore', tail: true, hair: true, clothes: false, hat: false, bow: true, image: '../../images/Eeyore.png'}, {name: 'Genie', tail: true, hair: true, clothes: false, hat: false, bow: false, image: '../../images/Genie.png'}, {name: 'Mickey', tail: true, hair: false, clothes: true, hat: false, bow: false, image: '../../images/mickey-mouse.png'}], questions: [{ques: 'has a tail?'}, {ques: 'has hair?'}, {ques: 'is wearing clothes?'}, {ques: 'is wearing a hat?'}, {ques: 'is wearing a bow?'}], focusQuestion: null, guessWho: {}}
  }

  setFocusQuestion(question) {
    this.setState({focusQuestion: question})
  }
  
  componentDidMount() {
    let guessWho = this.state.people.slice();
    for (var i = guessWho.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = guessWho[i];
            guessWho[i] = guessWho[j];
            guessWho[j] = temp;
        }

        this.setState({guessWho:guessWho[0]})
  }
  getGuessWhoCharacter() {
    this.state.people.map(function(chars) {
      if(chars.name === this.state.guessWho) {
        console.log(chars)
      }
    }.bind(this))
  }
  

  render() {
    console.log('focus', this.focusQuestion)
    return(
      <div>
        <h3>Guess Who!?</h3>
        <PeopleList characters={this.state.people}/>
        <QuestionList character={this.state.guessWho} questions={this.state.questions} selectQuestion={this.setFocusQuestion.bind(this)} fQuestion={this.focusQuestion}/>
        <Question question={this.focusQuestion}/>
        <GuessWhoCharacterShuffle characters={this.state.people}/>
        <GuessWhoCharacter character={this.state.guessWho}/>
      </div>
      );
  }
}


export default GameContainer;