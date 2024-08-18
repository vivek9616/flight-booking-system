import './CancelTicket.css';

function CancelTicket(){ 
   return(<div className='cancelticket'>
               <div className='cancelbox'>
                  <div id='heading' >Cancel Ticket </div>
                  <div>
                        <label>Enter Ticket Number: </label>
                        <input type='text'></input>
                        <button>Submit</button>
                  </div>
                   </div>
               </div>);

}

export default CancelTicket;