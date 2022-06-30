import PostMassage from '../models/postMassage.js';
export const getPosts = async (req, res) =>{
    try {
        const postMassages = await PostMassage.find();
        res.status(200).json(postMassages)
    } catch (error) {
        res.status(404).json({massage : error.massage})
    }
}

export const createPost = async (req, res) =>{
    // const post = req.body;
    const post = {
        title : "A test",
        massage : "A massage",
        creator : "RHShoumik",
        tags : ["test","tag"],
        selectedFile : "img1.img",
        likeCount : {
        type : 5000,
        }
    };
    
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({massage : error.massage});
    }
}