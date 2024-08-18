import './Home.css';
 import welcomephoto from '../welcome.jpg';

function Home(){
              return(<div className="home">
                            <img src={welcomephoto} alt={'loading..'}></img> 
                            <div className='text'> Welcome To My Airlines System</div>
                     </div>);}

export default Home;