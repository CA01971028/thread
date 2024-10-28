import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from './Home'
import './App.css'
import Head from './components/Header'
import ThreadsNew from "./ThreadsNew";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/threads/new' element={<ThreadsNew/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
