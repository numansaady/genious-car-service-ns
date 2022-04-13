import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Experts from './Pages/HomePage/Experts/Experts';
import Home from './Pages/HomePage/Home/Home';
import Services from './Pages/HomePage/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/experts' element={<Experts/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
