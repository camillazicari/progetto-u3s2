import { useState } from "react";
import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const MyNav = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  return (
    <Navbar expand="md" className="bg-light py-0 sticky-top top-0">
      <Container fluid>
        <Link to={"/"} className="w-25 navbar-brand fw-bold">
          <img
            src="https://i.pinimg.com/736x/77/0b/80/770b805d5c99c7931366c2e84e88f251.jpg"
            className="rounded-4"
            style={{ width: "70px" }}
          />{" "}
          Weather-App
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to={"/"} className=" text-decoration-none text-black-50 py-1">
              Home
            </Link>
            <Nav.Link href="#" className="py-1 text-black-50">
              Preferiti
            </Nav.Link>
            <div className="d-flex border border-secondary rounded-2 p-1">
              <Form.Control
                type="text"
                placeholder="Cerca la città..."
                className="mr-sm-2 py-0 text-black-50 border-0 search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button
                type="submit"
                className="py-0 btn-sm bg-transparent border-secondary text-black searchBtn"
                onClick={() => navigate("/cityWeather/" + search)}
              >
                <i className="bi bi-search"></i>
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
