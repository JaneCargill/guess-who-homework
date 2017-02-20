import React from 'react';
import ReactDOM from'react-dom';
import GameContainer from './Containers/GameContainer';


window.onload = () => {
  ReactDOM.render(
    <GameContainer title="GuessWho"/>,
    document.getElementById('app')
  );
}
