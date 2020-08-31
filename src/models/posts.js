const posts = [];
let currentId = 1;

function getAllPost() {
  // return posts; //not good. Should return a deep copy
  return JSON.parse(JSON.stringify(posts));
}

function addPost(post) {
  //destructing receiving post to get author and content, add Id
  const newPost = { ...post, id: currentId++ };
  // ~~~~ const post = { author, content, id: currentId++ };
  //add post into posts array
  posts.push(newPost);
  return newPost;
}

function getPostById() {
  // find id from posts equal to id
  const post = posts.find(i => i.id === id); //Number() convert string to number
}

//find post index 
function getPostIndexById(id) {
  return posts.findIndex((i) => i.id === id);
}

//updating post replace post index
function updatePostById(id, newPost) {
  const postIndex = getPostIndexById(id);
  const updatedPost = { ...newPost, id };
  posts[postIndex] = updatedPost;
  return updatedPost;
}

function deletePostById(id) {
  const postIndex = getPostIndexById(id);
  const deletedPost = posts.splice(postIndex, 1);
  return deletedPost;
}

module.exports = {
  addPost, getAllPost, getPostById,
  getPostIndexById, updatePostById, deletePostById
};