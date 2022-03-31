const { response } = require("express");
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

  async getAll(req, res) {
    try {
      const posts = await Post.find();
      return res.status(200).json(posts);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ message: "Please enter id of the post" });
      }

      const post = await Post.findById(id);
      res.status(200).json(post);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async update(req, res) {
    try {
      const post = req.body;

      if (!post._id) {
        res.status(400).json({ message: "Please enter id of the post" });
      }

      const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
        new: true,
      });
      res.status(200).json(updatedPost);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const post = await Post.findByIdAndDelete(id);
      res.status(200).json(post);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

module.exports = new PostsController();
