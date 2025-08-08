import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import apple from "../../public/logos/apple.svg";
import music from "../../public/logos/music.svg";
import "./MyNavbar.css";

function MyNavbar() {
  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#343a40" }}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-0" />
        <Navbar.Brand href="#home" className="mx-auto order-1">
          {/* <img src={apple} alt="logo_apple" /> */}
          <img
            src={music}
            alt="logo_music"
            style={{ filter: "invert(100%)" }}
          />
        </Navbar.Brand>
        <div className="d-flex align-items-center order-2">
          <Nav.Link href="#login" className="my-0" style={{ color: "#e06c75" }}>
            Accedi
          </Nav.Link>
        </div>

        <Navbar.Collapse id="basic-navbar-nav" style={{ color: "#e06c75" }}>
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
}

export default MyNavbar;
