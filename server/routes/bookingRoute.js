const express = require('express');
const router= express.Router();
const Booking= require('../models/booking');
const Room = require('../models/room');

router.post("/book",
    async (req,res)=>{
       
        const newBooking=  new Booking({tenant:req.body.tenant , tenantId: req.body.tenantId, roomLocation: req.body.roomLocation , roomId:req.body.roomId});
        
        try {
            const booking = await newBooking.save();
            
            const room = await Room.findOneAndUpdate({_id:newBooking.roomId},{isAvailable:false},{
                new:true 
            });
            res.send("Booked Successfully");
            
            
        } catch (error) {
            return res.status(400).json({error});
        }

    }





);

router.post("/getmybookings",
async(req,res)=>{
    const filter={tenantId:req.body.tenantId};
    try {
        const mybookings= await Booking.find({filter});
       
        res.send(mybookings);
        
    } catch (error) {
        console.log(error);
    }

}
);



router.post("/remove",
async(req,res)=>{
    const toBeRemoved = {_id:req.body.removalId};
    const removalroom = {_id:req.body.removalRoomId}
    try {
        const response = await Booking.findOneAndDelete({toBeRemoved});
        const room2 = await Room.findOneAndUpdate(removalroom,{isAvailable:true},{
            new:true 
        });
    } catch (error) {
        console.log(error);
    }
    
}


);




router.get("/getallbookings",
async(req,res)=>{

    try {
        const bookingsAll = await Room.find({});
        res.send(bookingAll);
    } catch (error) {
        console.log(error);
        
    }
});

module.exports=router;