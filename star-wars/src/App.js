import React, { Component, useState } from 'react';

import CharPicker from './components/CharPicker';
import Character from './components/Character';

const App=props=>{

/*
 const [state,setState]= useState(state = {
    selectedCharacter: 1,
    destroyed: false
  });
*/

  const [selectedCharacter,setSelectedCharacter]=useState(1);
  const [side, setChosenSide]=useState("light");
  const [destroyed, setDestroyed]=useState(false);

  const sideHandler = side => {
    setChosenSide(side);
  };

  const charSelectHandler = event => {
    const charId = event.target.value;
    setSelectedCharacter(charId);
  };

  const destructionHandler = () => {
    setDestroyed(true);
  };

  
    let content = (
      <React.Fragment>
        <CharPicker
          side={side}
          selectedChar={selectedCharacter}
          onCharSelect={charSelectHandler}
        />
        <Character selectedChar={selectedCharacter} />
        <button onClick={sideHandler.bind(this, 'light')}>
          Light Side
        </button>
        <button onClick={sideHandler.bind(this, 'dark')}>Dark Side</button>
        {side === 'dark' && (
          <button onClick={destructionHandler}>DESTROY!</button>
        )}
      </React.Fragment>
    );

    if (destroyed) {
      content = <h1>Total destruction!</h1>;
    }
    return content;
  
  
}

export default App;
