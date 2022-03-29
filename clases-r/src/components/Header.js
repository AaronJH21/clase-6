import React from 'react'
import { Navbar,Container,NavDropdown,Button,Nav,Form,FormControl } from 'react-bootstrap';

const Header = () => {
  
    return (
        <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Kuraudo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Inicio</Nav.Link>
              <Nav.Link href="#action2">VideoJuegos</Nav.Link>
              <NavDropdown title="Componentes" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Populares</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Ofertas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Nuevo
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Eventos
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Header