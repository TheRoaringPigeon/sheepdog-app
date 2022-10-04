import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function MainNavigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="mb-3">
      <Container fluid>
        <Navbar.Brand>SheepDog Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-sm"
          aria-labelledby="offcanvasNavbarLabel-expand-sm"
          placement="end"
          className="text-bg-dark"
        >
          <Offcanvas.Header closeButton className="btn-close-white">
            <Offcanvas.Title
              id="offcanvasNavbarLabel-expand-sm"
              className="text-dark"
            >
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link href="/" passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href="/scheduler" passHref>
                <Nav.Link id="schedulerLink">Schedule</Nav.Link>
              </Link>
              <NavDropdown
                title="More"
                id="offcanvasNavbarDropdown-expand-sm"
                drop="start"
              >
                <Link href="/reviews" passHref>
                  <NavDropdown.Item>Reviews</NavDropdown.Item>
                </Link>
                <Link href="/thoughts" passHref>
                  <NavDropdown.Item>Thoughts</NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link href="/contact" passHref>
                  <NavDropdown.Item>Contact</NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default MainNavigation;
