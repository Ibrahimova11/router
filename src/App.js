import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/About" element={<About/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
  );
}

export default App;

