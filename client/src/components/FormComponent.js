import { Button, Container, Form } from 'react-bootstrap';
import { useState } from 'react';

const FormComponent = () => {
  const  [state, setState] = useState({
    title: "",
    content: "",
    author: ""
  })
  const { title, content, author } = state

  // Event for state
  const inputValue = (e, name) => {
    setState({...state, [name]: e.target.value})
  }

  const submitData = () => {
    console.log(state)
  }

  return (
    <Container className='p-5'>
      <h1> Create Blog </h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label> Title </Form.Label>
          <Form.Control type="text" name="title" value={title} placeholder="Enter Title" onChange={ (e) => inputValue(e, "title") } />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Content </Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter Content"
            style={{ height: '100px' }}
            value={content}
            onChange={ (e) => inputValue(e, "content") }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Author </Form.Label>
          <Form.Control type="text" name='author' value={author} placeholder="ex. Admin" onChange={ (e) => inputValue(e, "author") } />
        </Form.Group>

        <Button variant="success" type="button" onClick={ submitData }>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default FormComponent