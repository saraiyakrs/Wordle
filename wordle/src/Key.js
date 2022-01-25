import React from 'react'

const Key = ({letter,color}) => {
    const onKeyPress = () => {
        
    }
    return (
        <div style  = {{backgroundColor: color}}>
            {letter}
        </div>
    )
}

export default Key
