import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import FormComponent from './components/FormComponent'
import BlogComponent from './components/BlogComponent'
import EditComponent from './components/EditComponent'
import LoginComponent from './components/LoginComponent'

const MyRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={ <App /> } />
        <Route path="/create" exact element={ <FormComponent /> } />
        <Route path="/blog/:slug" exact element={ <BlogComponent /> } />
        <Route path="/blog/edit/:slug" exact element={ <EditComponent /> } />
        <Route path="/login" exact element={ <LoginComponent /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoute