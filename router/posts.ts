// const express =require ('express');
import express, { Request, Response } from 'express';
import PostsController from '../controllers/postsController';
const PostController = new PostsController(  );
const router = express.Router();

// const dto =(users:any)=>users.map((user: any)=>({
//     title:user.title
// })
// )

router.get('/', PostController.getAll);

router.post('/', PostController.create);

router.get('/:postId', PostController.getById);

router.delete('/:postId', PostController.delete);

router.patch('/:postId', PostController.updateById);

module.exports = router;
