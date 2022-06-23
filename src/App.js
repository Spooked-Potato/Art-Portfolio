
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePageComponent from './components/HomePageComponent';
import ContactUSComponent from './components/ContactUSComponent';
import AboutMeComponent from './components/AboutMeComponent';
import CardSwipper from './components/CardSwipper';
import {CardGrid} from './components/CardGrid';

function App() {
  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path='/'element={<HomePageComponent/>}/>
      <Route path='/myart'element={<CardGrid/>}/>
      <Route path='/aboutme'element={<AboutMeComponent/>}/>
      <Route path='/contact' element={<ContactUSComponent/>}/>
      <Route path='/swiper' element={<CardSwipper/>}/>
    </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
