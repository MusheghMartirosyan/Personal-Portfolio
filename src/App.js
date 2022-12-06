import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import HomeWrapper from './pages/HomeWrapper';
import Error from './pages/Error';

function App() {
  return (
    <> 
    <Routes>
      <Route path='https://musheghmartirosyan.github.io/Portfolio/' element={<HomeWrapper />}>
        <Route index element={<Header />}/>
        <Route path='https://musheghmartirosyan.github.io/Portfolio/about' element={<About />} />
        <Route path='https://musheghmartirosyan.github.io/Portfolio/experience' element={<Experience />} />
        <Route path='https://musheghmartirosyan.github.io/Portfolio/portfolio' element={<Portfolio/>}/>
        <Route path='https://musheghmartirosyan.github.io/Portfoliocontact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
