
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Artical from './pages/Artical';
import ArticalList from './pages/ArticalList';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
    <div className="max-w-screen-md pt-20 mx-auto">
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/artical-list' element={<ArticalList/>}/>
      <Route path='/artical/:name' element={<Artical/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
