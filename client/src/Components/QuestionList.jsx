import React from 'react';
import Question from './Question';
import GuessWhoCharacterShuffle from './GuessWhoCharacterShuffle';

class QuestionList extends React.Component{
  constructor() {
    super()
    this.state = {selectedIndex: undefined, question: {}, answer: null}

  } 

  componentDidMount() {
    this.setState({question: this.props.questions[event.target.value]});
  }

  handleChange() {
    let newIndex = event.target.value;
    this.setState({selectedIndex: newIndex});
    this.props.selectQuestion(this.props.questions[newIndex]);
  
    // console.log('?', this.state.question)
    // console.log('q this', this.props.selectQuestion(this.props.questions[newIndex]))
  }
  handleClick() {
    const disney = this.props.character;
    const question = this.props.questions[event.target.value];

    if (disney.bow && question === "is wearing a bow?")  {
        this.setState({answer: 'yes'})
    } else {
        this.setState({answer: 'no'});
    }
    
  }

  render() {
    // console.log()
    console.log('focus', this.state.question)
    const x = this.props.questions[event.target.value]
    console.log('bla', x)
    let options = this.props.questions.map(function(question, index) {
      return(
        <option value={index} key={index}>{question.ques}</option>
        );
    });
    return(
      <div className='Questions'>
      <select id='questions' value={this.state.selectedIndex} onChange={this.handleChange.bind(this)}>
      {options}
      </select>
      <button id='askButton' onClick={this.handleClick.bind(this)}>Ask</button>
      <Question answer={this.state.answer}/>
      </div>
      );

  }

}

export default QuestionList;