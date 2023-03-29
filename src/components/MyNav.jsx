import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const MyNav = (props)=>{
    return (<Navbar fixed="top" bg="dark" variant="dark" expand="lg">
    <Container fluid>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">{props.homepage}</Nav.Link>
          <Nav.Link href="#">{props.aboutus}</Nav.Link>
          <Nav.Link href="#">{props.browser}</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>)
}

export default MyNav;