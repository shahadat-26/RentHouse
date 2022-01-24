const mongoose =require('mongoose');

const bookingSchema = mongoose.Schema({
    
    tenant:{
        type: String,
        required:true
    },
    tenantId:{
        type:String,
        required:true
    },
    roomLocation:{
        type:String,
        required:true 
    },
    roomId:{
        type:String,
        required:true
    },
    bookedAt:{
        type:Date,
        
        default: Date.now()
    },
    isBookingOn:{
        type:Boolean,
        
        default:true 
    }


},
{
    timestamps:true
});

const bookingModel = mongoose.model("bookings",bookingSchema);

module.exports=bookingModel;