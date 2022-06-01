
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePageComponent from './components/HomePageComponent';
import ContactUSComponent from './components/ContactUSComponent';

function App() {
  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path='/'element={<HomePageComponent/>}/>
      <Route path='/contact' element={<ContactUSComponent/>}/>
    </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
