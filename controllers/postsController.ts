import express, { Request, Response } from 'express';
import Dto from '../dto/dto';

const Post = require('../model/post');
import PostsService from '../services/service';
const PostService = new PostsService();

class PostsController {
  async getAll(req: express.Request, res: express.Response) {
    try {
      const Posts = await PostService.get();

      const DtoPosts = Posts.map((post: any) => Dto(post._id, post.title));
      res.json(DtoPosts);
    } catch (err) {
      res.json({ message: err });
    }
  }

  async create(req: Request, res: Response) {
    console.log(req.body);

    const postTitle = req.body.title;

    try {
      const savedPost =  PostService.post(postTitle);

      res.json(savedPost);
    } catch (err) {
      res.json({ message: err });
    }
  }

  async getById(req: Request, res: Response) {
    const postId = req.params.postId;
    console.log(postId)
    try {
      const getById = await PostService.getById(postId);
      console.log(getById)
      res.json(Dto(getById._id, getById.title));
    } catch (err) {
        console.log(err);
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
    try {
      const updatedPost =  PostService.patch(postId, postTitle);

      res.json(updatedPost);
    } catch (err) {
      res.json({ message: err });
    }
  }
}

export default PostsController;
