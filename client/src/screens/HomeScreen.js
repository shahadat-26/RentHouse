import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios'
import Navbar from '../components/Navbar';

import Room from '../components/Room';
import '../components/componentStyling/Room.css'



function HomeScreen() {


    const [place,setplace]=useState("");
    const [rooms, setrooms] = useState([]);
    const [loading, setloading] = useState();
    const [error, seterror] = useState();
    const[duplicaterooms,setduplicaterooms]=useState([]);
    
    


    useEffect(async () => {
        try {
            setloading(true);
            const data = (await axios.get('/api/rooms/getallrooms')).data;
            setrooms(data);
            setduplicaterooms(data);
            setloading(false);

        }
        catch (error) {
            setloading(true);

            console.log(error);
        }

    }, []);
    
    function makeSearch()
    {
        const temprooms= duplicaterooms.filter(rm=>rm.Location.toLowerCase().includes(place.toLowerCase()));
        const temprooms2= temprooms.filter(rm=>rm.isAvailable);
        setrooms(temprooms2);
    }
    

    return (
        <div>
            <Navbar />
            
            <div className='container'>

                <div className='row justify-content-center mt-3 '>
                <input type='text' className='form-control mt-5 mb-5 p-3 w-50 me-5 ' placeholder='Search Your Location' value={place} onChange={(e)=>{setplace(e.target.value)}} onKeyUp={makeSearch}/>
               
                    {
                        loading ? <h1>Loading...</h1> :
                            error ? <h1>Got An Error</h1> :
                                rooms.map(
                                    rm => {
                                       
                                        return  <div className='col-md-10'>

                                            <Room room={rm} />
                                        </div>
                                    }
                                )




                    }
                </div>




            </div>
        </div>
    );
}

export default HomeScreen;