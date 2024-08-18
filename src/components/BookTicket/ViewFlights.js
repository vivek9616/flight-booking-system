import './ViewFlights.css';

function ViewFlights(props) {
const sdetails=props.searchdt;
const flight=props.flights;
const result=flight.filter(filterFlights);

function filterFlights (flt){
return(flt['Source']===sdetails['Source City'] && flt[ 'Destination']===sdetails['Destination City'])
}

return(<div>
<div className="searchdetails" >
        <span className="yousearch" >You searched for: </span><br></br>
        <label className='topsearchbox yousearch'>Source Station :{sdetails['Source City']}</label>
        <label className='topsearchbox yousearch'> Destination :{sdetails['Destination City']}</label>
        <label className='topsearchbox yousearch' >Class: {sdetails['Class']}</label>
        <label className='topsearchbox yousearch' >Travel Date {sdetails['Travel Date']}</label>
        <label className='topsearchbox yousearch' >Return Date {sdetails['Return Date']}</label>
</div>

<div className= "flightsfetched">
{result.map(flt=>(<div className='flt'>

<div className='fltparts' ><label >Flight Number </label><div className="smallcp" >{flt['Flight Number']}</div></div> 
<div className='fltparts' ><label >Flight Name :</label><div className= "smallcp" >{flt['Flight Name']}</div></div> 
<div className="fltparts"><label >Depart Time :</label><div className="smallcp">{flt['Depart Time']}</div></div>

<button>Book Flight</button>

</div>


))}
</div>
</div>);
 }
export default ViewFlights;