// import { Hero } from './components/Hero/Hero';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Teams from './pages/Teams/Teams';
import Schedule from './pages/Schedule/Schedule';
import Members from './pages/Members/Members';
import NotFound from './pages/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/teams' element={<Teams/>}/>
          <Route path='/schedule' element={<Schedule/>}/>
          <Route path='/members' element={<Members/>}/>
          <Route path='*' element={<NotFound/>}/>ß
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
