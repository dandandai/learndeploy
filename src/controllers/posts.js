//从 model 导入
const postModel = require('../models/posts');

function getAllPost(req, res) {
  const posts = postModel.getAllPost();
  return res.json(posts);
}

function addPost(req, res) {
  //destructing toget author content from reqest body
  const { author, content } = req.body;
  const post = postModel.addPost({ author, content });
  return res.status(201).json(post);
}

function getPostById(req, res) {
  //destructing, get route params which is id in this case
  const { id } = req.params; //id - string type
  const post = postModel.getPostById(id);
  //if no post (id do not exist) return status directly
  if (!post) {
    return res.sendStatus(404);
  }
  return res.json(post);
}

function updatePostById(req, res) {
  //destructing, get route params which is id in this case
  const { id } = req.params; //id - string type
  //get author, content
  const { author, content } = req.body;
  const updatedPost = postModel.updatePostById(id, { author, content });
  return res.json(updatedPost);
}

function deletePostById(req,res){
  //destructing, get route params which is id in this case
  const { id } = req.params; //id - string type
  const deletedPost = postModel.deletePostById(id);
  return res.json(deletedPost);
}

module.exports ={
  addPost, getAllPost, getPostById,
  updatePostById, deletePostById
};