import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './component/Footer/Footer'
import Navbar from './component/Navbar/Navbar';
import Singlepost from './pages/SinglePost/Singlepost';
import Categories from './pages/Categories/Categories';
import Singlecategory from './pages/Singlecategory/Singlecategory'
import Contact from './pages/Contact/Contact';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/:category' element={<Singlecategory />} />
          <Route path='/categories/:category/:id' element={<Singlepost />} />
          <Route path='/contacts' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
