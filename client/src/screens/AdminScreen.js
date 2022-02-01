import React from 'react';
import '../components/componentStyling/Room.css'
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileRooms from '../components/ProfileRooms';
import { useNavigate } from 'react-router-dom';
import AdminRoom from './../components/AdminRoom';
export default function ProfileScreen() {


    const [bookings, setbookings] = useState([]);

    const isAdminCheck= (JSON.parse(localStorage.getItem("currentUser"))).isAdmin;
   
    const navigate = useNavigate();

    useEffect(async () => {
        if(isAdminCheck){
        try {
            
           
            const result = await axios.get('/api/bookings/getallbookings');
            const data= result.data;
            setbookings(data);
            
          

        }
        catch (error) {
           

            console.log(error);
        }
    }
    else{
        navigate("/profile");
    }
    }, [bookings]);

  return (
  <div>
       <div>
            <Navbar />
            
            <div className='container'>

                <div className='row justify-content-center mt-3 '>
               
                    {
                        
                                bookings.map(
                                    bk => {
                                       
                                        return  <div className='col-md-10'>

                                            <AdminRoom booking={bk} />
                                        </div>
                                    }
                                )




                    }
                </div>




            </div>
        </div>
  </div>
  );
}
