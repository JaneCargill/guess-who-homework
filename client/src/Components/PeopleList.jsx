import React from 'react';
import Characters from './Characters';


class PeopleList extends React.Component{
  // getRandomCharacter() {
  //   let guessWho = this.props.characters.slice();
  //   for (var i = guessWho.length - 1; i > 0; i--) {
  //           var j = Math.floor(Math.random() * (i + 1));
  //           var temp = guessWho[i];
  //           guessWho[i] = guessWho[j];
  //           guessWho[j] = temp;
  //       }

  //       return guessWho[0].name;
  // }

  render() {
    // console.log(this.getRandomCharacter())
    const char = this.props.characters.map(function(characteristics, index) {
      return(
      <Characters image={characteristics.image} key={index}></Characters>
      )
    })
    // console.log()
    return (
      <div className='picsDiv'>
        {char}
      </div>
      )
  }
}

export default PeopleList;