import { Modal, Button , Carousel } from 'react-bootstrap'
import './componentStyling/Room.css';
import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Room({ room }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate= useNavigate();
    

    async function rentNow()
    {
        const user= JSON.parse(localStorage.getItem("currentUser"));
        const booking={
            tenant: user.username,
            tenantId: user._id,
            roomLocation: room.Location,
            roomId: room._id
        }
        try {
            const result = await axios.post('/api/bookings/book', booking);
            navigate("/profile");
            
        } catch (error) {
            console.log(error);
        }


    }


    return (
  

    <div className='row bs'>

        <div className='col-md-4 mt-5 ms-3'>
            <img src={room.imageurls[0]} className='smallimg' />
        </div>
        <div className='col-md-7 text-start mt-4 ms-4'>
            <p style={{ fontWeight: 'bolder', fontSize: '25px' }}>Location: {room.Location}</p>
            <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Total Rooms: {room.totalRooms}</p>
            <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Rent Per Month: {room.rentPerMonth}</p>
            <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Special Requirements: {room.specialRequirements}</p>
            <div style={{ float: 'right' }}>
            
                <button className='btn btn-secondary mb-3 ms-1' style={{ fontWeight: 'bold' }} onClick={rentNow}>Rent Now</button>
                
                <button className='btn btn-secondary mb-3 ms-3' style={{ fontWeight: 'bold' }} onClick={handleShow}>Have A Look</button>
               
            </div>
        </div>
        <Modal show={show} onHide={handleClose} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>{room.Location}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Carousel>
                    {
                        room.imageurls.map((url) => {
                            return  <Carousel.Item>
                               
                                <img
                                    className="d-block w-100 bigimg"
                                    src={url}

                                />
                            </Carousel.Item>
                        })}
                </Carousel>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>




    </div>

            );
}

export default Room;