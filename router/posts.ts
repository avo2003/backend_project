// const express =require ('express');
import express  from 'express';
import PostsController from '../controllers/postsController';

const PostController = new PostsController();
const router = express.Router();

// const dto =(users:any)=>users.map((user: any)=>({
//     title:user.title
// })
// )

/**
 * @swagger
 *  components:
 *      schema:
 *          Post:
 *              type: object
 *              properties:
 *                  title:
 *                      type: string
 */

/**
 * @swagger
 * /posts:
 *  get:
 *      summary: Get all posts.
 *      description: This api used to fatch data from mongodb.
 *      responses:
 *          200:
 *              description: All posts.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schema/Post'
 *
 *
 */
router.get('/', PostController.getAll);

/**
 * @swagger
 * /posts:
 *  post:
 *      summary: Creates a new post.
 *      description: This api used to fatch data from mongodb.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/Post'
 *
 *      responses:
 *        200:
 *          description: Created
 */
router.post('/', PostController.create);
/**
 * @swagger
 * /posts/{id}:
 *  get:
 *      summary: Get post by ID.
 *      description: This api used to fatch data from mongodb.
 *      parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: Numeric ID required
 *           schema:
 *             type: string
 *      responses:
 *          200:
 *              description: All posts.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: string
 *                              title:
 *                                  type: string
 *
 *
 */

router.get('/:postId', PostController.getById);
/**
 * @swagger
 * /posts/{id}:
 *  delete:
 *      summary: Delete post by ID
 *      description: This api used to fatch data from mongodb.
 *      parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: Numeric ID required
 *           schema:
 *             type: string
 *      responses:
 *          200:
 *              description: data is deleted.
 *
 */

router.delete('/:postId', PostController.delete);

/**
 * @swagger
 * /posts/{id}:
 *  patch:
 *      summary: Creates a new post.
 *      description: This api used to fatch data from mongodb.
 *      parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: Numeric ID required
 *           schema:
 *             type: string
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/Post'
 *
 *      responses:
 *          200:
 *              description: Updated Successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#components/schema/Post'
 *          
 */

router.patch('/:postId', PostController.updateById);

router.get('/:postId/mobile', PostController.getmobile);
router.post('/:postId/mobile', PostController.creatmobile);
// module.exports = router;
 export = router;
