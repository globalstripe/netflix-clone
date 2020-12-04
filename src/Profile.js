import React from 'react'
import './profile.css'

function Profile(props) {

    console.log('Props: ', props)
    console.log('Quote: ', props.quote)


    return(
       <div className="profile">
         <hr></hr>
         <br></br>
            <h1>This is the Profile Page! </h1>
            <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/profile">Setting</a></li>
        
        </ul>
        <hr></hr><br></br>
        <h1>Quote: {props.quote}</h1>
        <br></br>
        <hr></hr>
        </div>                        
        )    

}

export default Profile