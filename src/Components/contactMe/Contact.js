import React from 'react';
import{Form} from 'react-bootstrap'

function Contact() {
  return (
    <div className='contact'>        
        <Form.Label>Name</Form.Label>
        <Form.Control
            type="text"
            placeHolder="user name"           
        />

        <Form.Label >email</Form.Label>
        <Form.Control
            type="email"
            placeHolder="@mail.com"
           />

        <Form.Label >message</Form.Label>
        <Form.Control
            type="text"
            pllaceHolder="your messaagge"
        />

    </div>
  )
}

export default Contact