import './BookTicket.css';
import React,{useEffect, useState } from 'react';
import ViewFlights from './ViewFlights';
//import allflights from '../../allflights.json'
const City= ["Mumbai (BOM)", "Bengaluru", "New Delhi"] ;

function BookTicket(){
    const [startCity, setStartCity]=useState(""); 
    const [destCity, setDestCity]=useState("");
    const [dt, setdt]=useState(""); 
    const [cls, setCls]=useState("")
    const [returnDate, setReturnDate]=useState("");
    const [detailbox, setDetailbox]=useState({});
     const [allflights,setAllFlights]=useState([]);

    useEffect(()=>{
        async function fetchData(){
        await fetch('http://localhost:4500/getflightsdata').then((response)=>
        response.json()).then((data)=>{
            setAllFlights(data);}
            )}
        fetchData();

    },[]) 
    console.log(allflights);

    const srcCityChangeHandler=()=>{
        setStartCity(document.getElementById('from').value);
        }
        
    const destCityChangeHandler=()=>{
         setDestCity(document.getElementById('destination').value);
        }
    const dtchangeHandler =(event)=>{    
        setdt (event.target.value); }
        
    const classChangeHandler=()=>{
        setCls (document.getElementById('classes').value); }
        
    const returnDateHandler=(event)=>{
        setReturnDate(event.target.value);}

    const detailboxchangehandler=(dt)=>{    
        setDetailbox(dt);
        }
        
    const SearchHandler=(event)=>{
        event.preventDefault();
        const searchDetails={
        "Source City" :startCity,
        "Destination City" :destCity,
        "Travel Date":dt,
        "Class":cls,
        "Return Date":returnDate
        }
        console.log(searchDetails);
        detailboxchangehandler(searchDetails);

    }

    return(<div className='bookticket'>
              <span className="box">
                  <div id="heading">Book Ticket </div>
                  <div className="bookbox">
                    From:
                    <select id="from" onChange={srcCityChangeHandler} required>
                    <option value="null">Source City</option>
                    {City.map(city=> <option value={city}>{city}</option>)} </select><br></br>
                    TO:
                    <select id="destination" onChange={destCityChangeHandler} required> 
                    <option value='null' >Destination City</option>
                    {City.map(city=> <option value={city}>{city}</option>)}
                    </select><br></br>
                    Class:
                    <select id="classes" onChange={classChangeHandler}> <option value='null'>Select Class</option>
                    <option value='Economy' >Economy</option>
                    <option value='3AC' >3AC</option>
                    <option value='1AC' >1AC</option> 
                    </select><br></br>

                   Travel Date:
                   <input type="date" onChange={dtchangeHandler} required></input><br></br>
                   Return Date:
                    <input type="date" onChange={returnDateHandler}></input><br></br>
                 <button onClick={SearchHandler}>Search</button>
                 <button>Resets</button>
                 
            </div> </span>
            <span className='detaillsbox'>
                <div>
                     <ViewFlights searchdt={detailbox} flights={allflights}></ViewFlights>
                </div>
            </span>
    </div>);
}

export default BookTicket;