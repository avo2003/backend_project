// eslint-disable-next-line @typescript-eslint/no-var-requires
const Post = require('../model/post');

class PostsService {
  async get(postId:string) {
    console.log(2323);
    const posts = await Post.find(postId).populate('mobiles');

    return posts;
  }

  async post(postTitle: string) {
    const postId = new Post({
      title: postTitle
    });

    const savedPost = await postId.save();

    return savedPost;
  }

  async getById(postId: string) {
    const getById = await Post.findById(postId).populate('mobiles');

    return getById;
  }

  async delete(postId: string) {
    const removePost = await Post.remove({ _id: postId });

    return removePost;
  }

  async patch(postId: string, postTitle: string) {
    const updatedPost = await Post.updateOne(
      { _id: postId },
      { $set: { title: postTitle } }
    );

    return updatedPost;
  }
}

export default PostsService;
