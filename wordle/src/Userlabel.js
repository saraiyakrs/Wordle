import React from 'react'

const Userlabel = ({username, streak}) => {
    return (
        <div>
           <h2> Username: {username}</h2> 
           <h3> Streak: {streak}</h3>
       
        </div>
    )
}



export default Userlabel
