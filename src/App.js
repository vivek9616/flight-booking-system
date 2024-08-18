import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import BookTicket from './components/BookTicket/BookTicket'; 
import CancelTicket from './components/CancelTicket';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
        <Header/>
        <Navbar/>
        <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='//book-ticket' element={<BookTicket/>}/> 
        <Route path='/cancel-ticket' element={<CancelTicket/>}/>
        <Route path='/contact' element={<Contact/>}/>]

        </Routes>

        </div>
          );
    }

export default App;
