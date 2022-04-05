import React from 'react';
import './Profile.css'

function Profile(props) {
  return (
    <div className='profile'>
        <p className='pargraphhe'>Hello My <br/>name is <br/> <span>{props.fullName}</span> , <br/>and i make <br/>horrible<br/>  websites</p>
        <span>{props.children}</span>
    </div>
  )
}

export default Profile