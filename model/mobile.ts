import { Schema, model,  } from 'mongoose';
// const mongoose =require ('mongoose');
const MobileSchema = new Schema({
  product: {
    type: String,
    },
    
    seller:{
      type: Schema.Types.ObjectId,
      ref: 'Post'


    }
  
});
module.exports = model('Mobiles', MobileSchema);
