import mongoose from 'mongoose';

//database schema
const postSchema = new mongoose.Schema({
    title : String,
    massage : String,
    creator : String,
    tags : [String],
    selectedFile : String,
    likeCount : {
        type : Number,
        default : 0
    },
    createdAt: {
        type : Date,
        default :new Date()
    }

});
//create a database model
const PostMassage = mongoose.model('PostMassage' , postSchema);

export default PostMassage;