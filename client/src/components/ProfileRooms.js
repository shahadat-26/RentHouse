import React from 'react';
import { Modal, Carousel ,Button} from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ProfileRooms({booking}) {

    
    
    const removalId = booking._id;
    const removalRoomId= booking.roomId;
    const removal={
        removalId,
        removalRoomId
    }
     async function removeBooking()
     {
         const result  = await axios.post('/api/bookings/remove',removal ); 
        
         
     }

   
    return (
        


        <div className='row bs'>

           
            <div className='col-md-12 text-start mt-4 ms-4'>
                <p style={{ fontWeight: 'bolder', fontSize: '25px' }}>Location: {booking.roomLocation}</p>
                <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Tenant Name: {booking.tenant}</p>
                <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Rent Date: {booking.bookedAt}</p>
                
                

                <button className='btn btn-secondary mb-2 me-auto' style={{ fontWeight: 'bold' }} onClick={removeBooking}>Clear</button>

                  

                
            </div>
            



        </div>

    );
}
