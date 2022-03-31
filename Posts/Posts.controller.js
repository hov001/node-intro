const Post = require("./Posts.model");

class PostsController {
  async create(req, res) {
    try {
      const { author, title, text, picture, date } = req.body;
      const post = await Post.create({ author, title, text, picture, date });
      res.status(200).json(post);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

module.exports = new PostsController();
