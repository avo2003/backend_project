import express, { Request, Response } from 'express';
import Dto from '../dto/dto';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Mobile = require('../model/mobile');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Post = require('../model/post');
import PostsService from '../services/service';

const PostService = new PostsService();

class PostsController  {
  
  async getAll(req: express.Request, res: express.Response) {
    const postId = req.params.postId;
    try {
      
      const Posts = await PostService.get(postId);
      console.log (Posts)
        
      const DtoPosts = Posts.map((post: { _id: string; title: string; mobiles: string;  }) => Dto(post._id, post.title,post.mobiles));
      res.json(DtoPosts);
    } catch (err) {
      res.json({ message: err });
    }
  }

  async create(req: Request, res: Response) {
    console.log(req.body);

    const postTitle = req.body.title;

    try {
      const savedPost = PostService.post(postTitle);

      res.json(savedPost);
    } catch (err) {
      res.json({ message: err });
    }
  }

  async getById(req: Request, res: Response) {
    const postId = req.params.postId;
    console.log(postId);
    try {

      const post = await PostService.getById(postId);
      if(post) {
        res.json(Dto(post._id, post.title, post.mobiles));
      } else {
        res.json({ message: "Reource not found" });
      }
    } catch (err) {
      res.json({ message: err });
    }
  }

  async delete(req: Request, res: Response) {
    const postId = req.params.postId;
    try {
      const removePost = PostService.delete(postId);
      res.json(removePost);
    } catch (err) {
      res.json({ message: err });
    }
  }

  async updateById(req: Request, res: Response) {
    const postId = req.params.postId;
    const postTitle = req.body.title;
    console.log(123456);
    try {
      const updatedPost = PostService.patch(postId, postTitle);

      res.json(updatedPost);
    } catch (err) {
      res.json({ message: err });
    }
  }

    async getmobile(req: express.Request, res: express.Response) {
     
    try {
      console.log(11111, req.params.postId)
  //  const user = await Post.findById(req.params.postId)
       const user = await Post.findById(req.params.postId).populate('mobiles');
         console.log(2222, {user})
        
      res.json(user.mobiles);
    } catch (err) {
      res.json({ message: err });
    }
  }

   async creatmobile(req: express.Request, res: express.Response) {
  
    try {
      console.log(122345,req.body)
   const newMobile = new Mobile(req.body);
   console.log({req :req.body})
   const user =await Post.findById(req.params.postId)
      console.log(req.params)

   newMobile.seller=req.params.postId;
   await newMobile.save();
   user.mobiles.push(newMobile);
   await user.save();
         console.log(user);


    res.json(newMobile);
 
    } catch (err) {
      res.json({ message: err });
    }
  }

}

export default PostsController;
