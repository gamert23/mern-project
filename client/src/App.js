import './App.css';
import '../src/scss/main.scss';
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import NavBarComponent from './components/NavBarComponent';
import axios from 'axios'

function App() {
  const [blogs, setBlogs] = useState([]);

  const fetchData = () => {
    axios.get(`${ process.env.REACT_APP_API_URL }/blogs`).then((res) => {
      setBlogs(res.data)
    }).catch((err) => {
      alert(err)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <NavBarComponent />
      <Container className='p-5'>
        {
          blogs.map((blog, index) => {
            return (
              <Row key={index} style={{ borderBottom: "1px solid #ccc" }}>
                <Col>
                  <h2 className='pt-3'> { blog.title } </h2>
                  <p className='content-text'> { blog.content } </p>
                  <p className='text-muted'> author: { blog.author }, created at: { new Date(blog.createdAt).toLocaleString('th-TH') } </p>
                </Col>
              </Row>
            )
          })
        }
      </Container>
    </>
  );
}

export default App;
