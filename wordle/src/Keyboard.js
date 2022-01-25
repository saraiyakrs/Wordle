import React from 'react';
import Key from './Key'
//rafce
const Keyboard = ({letters}) => {
  
  return <div>
      {letters.map(l => 
        <Key
            letter={l.letter}
            color={l.color}
            newLetter = {l.setNewLetter}
        />
      )}
  </div>;
};

export default Keyboard;