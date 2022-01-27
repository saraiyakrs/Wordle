import React, {useState} from 'react'

const Userinfo = ({ username, bestScore, gamesBeaten, gamesPlayed }) => {
    const [newUsername, setnewUsername] = useState('')
    const handleUsername = () => {
        setnewUsername(newUsername)
    }
    return (
        <div>
            <h1>User Login</h1>
            <form>
                <label for = "username"> Username </label>
                <input type = "text" id = "username" name = "username"></input>
            </form>
            <button onclick = {handleUsername}>Enter</button>
            <h2>User Info</h2>
            <h3> Username: {username}</h3>
            
            <h3> Best Score: {bestScore}</h3>
            <h3> Games Beaten: {gamesBeaten}</h3>
            <h3> Games Played: {gamesPlayed} </h3>
            
        </div>
        
    )
}

export default Userinfo
