import logo from './logo.svg';
import './App.css';
import Header from './common/Header';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Blog from './components/Blog';
import Contact from './components/Contact';
import FormPost from './components/FormPost';


function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/formPost" element={<FormPost/>} />
          
        </Routes>
    </div>

  );
}

export default App;


 
