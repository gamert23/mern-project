import { Container, Nav } from 'react-bootstrap'

const NavBarComponent = () => {
  return (
    <Container className='pt-5'>
      <Nav>
        <Nav.Item>
          <Nav.Link href="/"> Home </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/create"> Create Blog </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  )
}

export default NavBarComponent;