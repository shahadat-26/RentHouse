const mongoose=require('mongoose');

const roomSchema = mongoose.Schema(
    {
      
        
        Location:
        {
            type:String,
            required:true
        },

        totalRooms:
        {
            type: Number,
            required: true
        },
        rentPerMonth:
        {
            type: Number,
            required:true 
        },

        specialRequirements:
        {
            type: String
        },
        isAvailable:
        {
            type:Boolean,
            default:true
        },
        imageurls:[]

        
        
    },

    {
        timestamps: true
    }
    );

    const roomModel = mongoose.model('rooms',roomSchema);

    module.exports=roomModel;