import React from 'react'
import { Form } from 'react-bootstrap'
import{Navbar,Container} from 'react-bootstrap' 
function NavBar() {
  return (
    <div>
        <Navbar>
  <Container>
    <Navbar.Brand href="#home">John Doe</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>About </Navbar.Text>
      <Navbar.Text>Projects </Navbar.Text>
      <Navbar.Text>Contact Me </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default NavBar

//<nav>
           // <h3>John Doe</h3>
           // <ul>
            //:    <li>About</li>
            //   <li>Projects</li>
             //   <li>Contact</li>
           // </ul>
        //</nav>