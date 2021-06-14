import '../App.css'
import React, {useState} from 'react';
import Icon from './Icon'

function Nav(){
  const [status, setstatus] = useState("online");

  return(
    <div className="Nav-container">
      <div className="Nav-icons">
        <Icon name="Home" icon="fas fa-home"></Icon>
        <Icon name="Chat" icon="far fa-comment-alt"></Icon>
        <Icon name="Meetings" icon="far fa-clock"></Icon>
        <Icon name="Contacts" icon="far fa-id-badge"></Icon>
      </div>
      <div className="Nav-search-profile-container">
        <div className="Nav-search">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Search"></input>
        </div>
          <img src="https://source.unsplash.com/random/10x10" alt="user profile" class="Nav-profile-picture"></img>
          {status === 'online'? <span className="dot online"></span> : <span className="dot dnd"></span>}
        </div>
    </div>
  )
}

export default Nav;