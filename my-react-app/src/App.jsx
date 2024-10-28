import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from './Home'
import './App.css'
import ThreadsNew from "./ThreadsNew";
import ThreadDateil from "./ThreadDateil";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/threads/new' element={<ThreadsNew/>}/>
        <Route path='/threads/:thread_id' element={<ThreadDateil/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
