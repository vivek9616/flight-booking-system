import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../flight-logo.png';

function Navbar(){
     return(
     <div className='nav'>
          <img src={logo} alt='loading' id='logo'></img>
        <span className='opt'><Link to=''  className='link'>Home</Link> </span>
         <span className='opt'><Link to='/book-ticket' className='link'>Book Ticket</Link></span> 
         <span className='opt'><Link to='/cancel-ticket' className='link'>Cancel Ticket</Link></span>
          <span className='opt'><Link to='/about' className='link'> About </Link></span>
          <span className='opt'><Link to='/contact'  className='link'>Contact</Link></span>

     </div>);

}

export default Navbar;