import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Student from './Pages/Student';
import ContactUs from './Pages/ContactUs';
import Header from './Components/Header';

function App() {
  return (
    <>
       <BrowserRouter>
          <Header/>
          <Routes>
              <Route path="" element={<Home/>} />
              <Route path="/Student" element={<Student/>} />
              <Route path="/Contact-us" element={<ContactUs/>} />
          </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
