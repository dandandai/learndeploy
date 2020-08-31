const express = require('express');
const {getAllPost,addPost,getPostById,
  updatePostById,deletePostById} = require('../controllers/posts');
const validatedId = require('../middleware/validatedId');
const router = express.Router();

router.get('',getAllPost);
router.post('',addPost);
router.get('/:id',validatedId,getPostById);
router.put('/:id', validatedId,updatePostById);
router.delete('/:id', validatedId,deletePostById);

module.exports = router;