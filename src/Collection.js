
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavDropdown from 'react-bootstrap/NavDropdown';

function Collection(){
    return(
        <div>

          <Navbar bg="dark" data-bs-theme="dark">
            <Nav defaultActiveKey="/home" as="ul">
              <Nav.Item as="li">
                <Nav.Link href="/home"><p className='nav-head'>Home</p></Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="/about"><p className='nav-head'>About</p></Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="/card"><p className='nav-head'>Cards</p></Nav.Link>
              </Nav.Item>
           
              <Nav.Item as="li">
                <NavDropdown title="Dropdown" id="nav-dropdown">
                  <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
            </Nav>
          </Navbar>

        </div>
    )
}
export default Collection;