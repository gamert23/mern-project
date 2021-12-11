import './App.css';
import { Container } from 'react-bootstrap';
import NavBarComponent from './components/NavBarComponent';

function App() {
  return (
    <>
      <NavBarComponent />
      <Container className='p-5'>
        <h1> Hello World </h1>

        <a className='btn btn-primary' href='/create'> Create blog </a>
      </Container>
    </>
  );
}

export default App;
