import React from 'react'

const Userinfo = ({ username, bestScore, gamesBeaten, gamesPlayed }) => {
    return (
        <div>
            <h1>User Login</h1>
            <form>
                <label for = "username"> Username </label>
                <input type = "text" id = "username" name = "username"></input>
            </form>
            <button>Enter</button>
            <h2>User Info</h2>
            <h2> Username: {username}</h2>
            
            <h3> Best Score: {bestScore}</h3>
            <h4> Games Beaten: {gamesBeaten}</h4>
            <h5> Games Played: {gamesPlayed} </h5>
            
        </div>
        
    )
}

export default Userinfo
