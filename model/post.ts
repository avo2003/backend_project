import { Schema, model, connect } from 'mongoose';
// const mongoose =require ('mongoose');
const PostSchema = new Schema<Post>({
  title: {
    type: String,
    required: true
  }
});
interface Post {
  title: string;
}
module.exports = model<Post>('Post', PostSchema);
