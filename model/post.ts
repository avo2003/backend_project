import { Schema, model,  } from 'mongoose';
import mongoose from 'mongoose';
// const mongoose =require ('mongoose');

const PostSchema = new Schema({
  title: {
    type: String,
    required: true

  },
      mobiles:[{
      type: Schema.Types.ObjectId,
      ref: 'Mobiles'
      
    

    }]
});

module.exports = model('Post', PostSchema);
