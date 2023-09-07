import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import ScrollToTopButton from './components/ScrollTopButton';


function App() {
  return (
    
    <div className='container-fluid'>
      
    <Navbar/>
    <Home/>
    <Service/>
    <Work/>
    <Contact/>
    <Footer/>
    
    </div>
  );
}

export default App;
