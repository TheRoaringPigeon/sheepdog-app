import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./MainNavigation.module.css";
import Link from "next/link";
function MainNavigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Container >
        <Navbar.Brand href="#home">SheepDog Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

  // return (
  //   <header className={classes.header}>
  //     <div className={classes.logo}>SheepDog Project</div>
  //     <nav>
  //       <ul>
  //         <li>
  //           <Link href='/reviews'>Reviews</Link>
  //         </li>
  //         <li>
  //           <Link href='/boomsticks'>Boomsticks and other murder devices</Link>
  //         </li>
  //       </ul>
  //     </nav>
  //   </header>
  // );
}

export default MainNavigation;
