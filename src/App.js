import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Expert from './pages/Expert/Expert' ;
import Login from './pages/Login/Login' ;
import News from './pages/News/News' ;
import Types from './pages/Types/Types' ;
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact' ;
import Lathe from './pages/Lathe/Lathe';
import Accessories from './pages/Accessories/Accessories';


function App() {
  return (
    
    <Router >
      
      <Navbar/>

      <Routes>

              <Route path='/' element={<Home/>}/>
              <Route path='/expert' element={<Expert/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/news' element={<News/>}/>
              <Route path='/types' element={<Types/>}/>
              <Route path='/contact-page' element={<Contact/>}/>
              <Route path='/lathe' element={<Lathe/>}/>
              <Route path='/accessories' element={<Accessories/>}/>
        
      </Routes>



      <Footer/>

     </Router>

      
      
      
  );
}


export default App;
