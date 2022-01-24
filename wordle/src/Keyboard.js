import React from 'react'
import Key from './Key'
import Userlabel from './Userlabel'

const Keyboard = ({ letters }) => {
    return <div>
        {letters.map(l =>

            <Key
                letter={l.letter}
                color={l.color}

            />
        )}

        <Key letter="A" color="grey" />
        <Key letter="B" color="green" />
    </div>;

};

export default Keyboard
