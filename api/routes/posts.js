const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//Create new Post
router.post("/", async (req,res) =>{
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200) .json(savedPost)
    } catch(err){
        res.status(500).json(err)
    }
});
//Update post
router.put("/:id", async (req,res) => {
    try {
        const post = await Post.findbyId(req.params.id);
        if(post.username === req.body.username) {
            try{
                const updatedPost = await Post.findbyIdAndUpdate(req.params.id,
            { 
                $set: res.body,
            }, 
                { new: true }
            );
            res.status(200).json(updatedPost);
            } catch(err) {
                res.status(500).json(err)
            }
        } else {
        res.status(401).json("You can only update your post!")
        }
    } catch(err) {
        res.status(500).json(err)
    }
});
//delete post
router.delete("/:id", async (req,res) => {
    try {
        const post = await Post.findbyIdAndDelete(req.params.id);
        if(post.username === req.body.username) {
            try{
               await post.delete()
                res.status(200).json("Post has been deletes!");
            } catch(err) {
                res.status(500).json(err)
            }
        } else {
        res.status(401).json("You can only delete your post!")
        }
    } catch(err) {
        res.status(500).json(err)
    }
});
//get post
router.get("/:id", async (req,res) =>{
    try {
        const post = await User.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }  
});
//fetch all posts
router.get("/", async (req,res) =>{
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let posts;
        if (username){
            posts = await Post.find({username})
        } else if(catName){
            posts = await Post.find({categories: {
                $in:[catName]
                },
            });
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }  
});
module.exports = router;
