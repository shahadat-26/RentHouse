import React from 'react';
import '../components/componentStyling/Room.css'
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileRooms from '../components/ProfileRooms';
export default function ProfileScreen() {

    

    const [bookings, setbookings] = useState([]);

    const tenantId= (JSON.parse(localStorage.getItem("currentUser")))._id;
   

    useEffect(async () => {
        try {
            
            const result = await axios.post('/api/bookings/getmybookings',tenantId);
            const data= result.data;
            setbookings(data);
          

        }
        catch (error) {
           

            console.log(error);
        }

    }, []);

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

                                            <ProfileRooms booking={bk} />
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
